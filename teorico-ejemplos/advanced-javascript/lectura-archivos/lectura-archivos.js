const fs = require('fs')

fs.readFile('./archivo.txt', {encoding: 'utf-8'}, (error,data) => {
  // if(error) throw error
  if(error) process.stdout.write(`ERROR: ${error}`)
  process.stdout.write('-------- Datos Leídos ------- \n')
  process.stdout.write(data)
})