const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const axios = require('axios')

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors({
  origin: "*", // "https://soultables.onrender.com/"
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/tiny', async (req, res) => {
  const { endpoint, params } = req.body;
  const token = process.env.API_TOKEN;
  const baseDomain = process.env.BACKEND_API_DOMAIN;
  const url = `${baseDomain}${endpoint}?formato=json&token=${token}&${params}`;


  const { data } = await axios.post(url)
  res.send(data.retorno);
  res.end();
});

app.listen(PORT, function () {
  console.log(`Express app listening on port ${PORT}`)
});