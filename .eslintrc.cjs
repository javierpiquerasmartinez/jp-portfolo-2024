module.exports = {
  extends: [
    'plugin:astro/recommended',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser'
    },
    {
      files:['*.js'],
      "parser": "babel-eslint",
      "rules": {
        "strict": 0
      }
    }
  ]
}