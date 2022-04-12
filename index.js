//De esta manera traes a express para poder usarlo
// require es como decir 'import' en Java
const express = require('express')

// luego hay que crear una aplicacion, con el constructor de express
// app es una instancia de express, osea un objeto
const app = express()

// Definir que puerto queremos que corra nuestra app
const port = 3000


// esto es la ejecucion de la funcion get
// se le da el path que es el primer parametro
// y la funcion/callback con dos parametros
// req para lo que se pide y res es para responder
// GET
app.get('/', (req, res) => {
  res.send('Hola mi server en express')
})


// Siempre tenemos que decirle a nuestra app en que puerto
// tiene que escuchar para poder ejecutarse
app.listen(port, () => {
  console.log('[!] ON [!] port: ' + port)
})
