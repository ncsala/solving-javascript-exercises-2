const fs = require('fs')

fs.readFile('./archivo.txt', 'utf-8', (err,data) => {
  if(err) throw err
  process.stdout.write(data)
})