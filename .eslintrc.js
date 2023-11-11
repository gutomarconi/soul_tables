module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
    "ecmaFeatures": {
      "tsx": true,
      "ts": true
    }
  },
  "plugins": ["@typescript-eslint", "react-hooks"],
  "extends": [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "ignorePatterns": [
    "*config.js",
    "**/vendor/*.js",
    "out/*.js",
    "dist/*.js",
    "setupTests.ts",
    "storybook-static/*"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-key": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "no-nested-ternary": "off",
    "react/display-name": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "react/jsx-wrap-multilines": "off",
    "@typescript-eslint/no-shadow": "off",
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }
}
