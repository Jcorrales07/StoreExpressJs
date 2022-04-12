//De esta manera traes a express para poder usarlo
// require es como decir 'import' en Java
const express = require('express');

// luego hay que crear una aplicacion, con el constructor de express
// app es una instancia de express, osea un objeto
const app = express();

// Definir que puerto queremos que corra nuestra app
const port = 3000;

// esto es la ejecucion de la funcion get
// se le da el path que es el primer parametro
// y la funcion/callback con dos parametros
// req para lo que se pide y res es para responder

// METHOD: GET. para conseguir informacion
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

// de esta manera se hacen nueva rutas, simplemente
// con el get se obtiene una ruta, si no existe

//ruta del home
app.get('/home', (req, res) => {
  res.send('Aqui deberia ir el home page');
});

//ruta de new-route
app.get('/new-route', (req, res) => {
  res.send('Hola soy tu nueva ruta, la que acabas de hacer!');
});

//ruta de products
app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000,
  });
});

//ruta de categories
app.get('/categories', (req, res) => {
  res.send('Varias categorias proximamente');
});

// Siempre tenemos que decirle a nuestra app en que puerto
// tiene que escuchar para poder ejecutarse
app.listen(port, () => {
  console.log('[!] ON [!] port: ' + port);
});
