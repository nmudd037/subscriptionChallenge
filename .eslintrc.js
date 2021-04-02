/* eslint-disable prettier/prettier */

module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    es6: true, //Enables all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6, but not vice-versa).
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'simple-import-sort/imports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
