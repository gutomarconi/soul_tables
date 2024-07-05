require('dotenv').config()
const esbuild = require('esbuild');
const http = require('http')
const { program } = require('commander');
const fse = require('fs-extra')
const { parse } = require('node-html-parser');
const crypto = require('crypto')
const inlineImage = require("esbuild-plugin-inline-image");

const { build } = esbuild

program.option('--serve')
program.parse();


const { serve: serveFlag } = program.opts();

const define = {}

for (const k in process.env) {
  if (k === 'CommonProgramFiles(x86)' || k === 'ProgramFiles(x86)') continue;
  define[`process.env.${k}`] = JSON.stringify(process.env[k]);
}

const hash = crypto.randomBytes(8).toString('hex');
const moduleName = `index.module.${hash}.js`

const htmlParserPlugin = {
  name: 'htmlParser',
  setup(build) {
    build.onEnd(async () => {
      const logo = await fse.readFile('./src/theme/theme/assets/soul.jpg');
      const html = await fse.readFile('./src/index.html', 'utf-8')
      const root = parse(html);
      const body = root.querySelector('body');

      body.insertAdjacentHTML('beforeend', `<script src="/${moduleName}"></script>`);

      await fse.outputFile('./build/index.html', root.toString())
      await fse.outputFile('./build/soul.jpg', logo)
    })
  }
}

const buildConfig = {
  bundle: true,
  target: 'esnext',
  entryPoints: ['src/index.tsx'],
  loader: {
    '.svg': 'base64',
    '.woff': 'dataurl',
    '.woff2': 'dataurl'
  },
  logLevel: 'info',
  platform: 'browser',
  outfile: `./build/${moduleName}`,
  sourcemap: 'inline',
  plugins: [htmlParserPlugin, inlineImage()],
  splitting: false,
  define: {
    ...define,
    this: 'window'
  }
}

const serve = async (servedir, listen) => {
  let ctx = await esbuild.context(buildConfig)
  await ctx.watch()
  let { host, port } = await ctx.serve({ servedir });

  const proxy = http.createServer((req, res) => {
    const forwardRequest = (path) => {
      const options = {
        hostname: host,
        port,
        path,
        method: req.method,
        headers: req.headers,
      };

      const proxyReq = http.request(options, (proxyRes) => {
        if (proxyRes.statusCode === 404) return forwardRequest('/');
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      });

      req.pipe(proxyReq, { end: true });
    };

    forwardRequest(req.url);
  });


  proxy.listen(listen);
};

return serveFlag ? serve('./build', 8000) : build(buildConfig)

