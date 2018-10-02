const path = require('path'); 
const babel = require('rollup-plugin-babel');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  "presets": [
    ["env", {
      "modules": false
    }],
  ],
  "plugins": [
    "external-helpers",
    "transform-object-rest-spread",
    "transform-es2015-arrow-functions"
  ],
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.umd.js'),
      format: 'umd', 
      name: 'Demo',
      amd: {
        id: 'lib/demo'
      },
    }, 
    plugins: [
      babel(babelOptions),
    ],
  },

]