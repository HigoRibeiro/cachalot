const path = require('path')
const fs = require('fs')

const sass = require('node-sass')

const output = path.resolve(__dirname, '..', 'public', 'style.css')
module.exports = () => new Promise((resolve) => {
  sass.render({
    file: path.resolve(__dirname, '..', 'client', 'scss', 'style.scss'),
    outFile: output,
    outputStyle: 'compressed'
  }, (err, result) => {
    if (!err) {
      fs.writeFile(output, result.css, () => {
        resolve()
      })
    }
  })
})
