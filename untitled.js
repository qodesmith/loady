const glob = require('glob-all')
const path = require('path')

var x = glob.sync([
  path.resolve(__dirname, 'src/**/*.js'),
  path.resolve(__dirname, 'src/index.ejs')
])

console.log(x)