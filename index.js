//De esta manera traes a express para poder usarlo
// require es como decir 'import' en Java
const express = require('express');
const faker = require('faker');

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
  const { size } = req.query;
  const limit = size || 10;
  const products = [];
  for (let i = 0; i < limit; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

/**
 * (1)
 * Okay mira, tenemos dos opciones para obtener parametros de un endpoint
 * la primera seria:
 *
 * app.get('/products/:parametro', (req, res) => {
 *  const parametro = req.params.parametro
 *  @Mas codigo
 * })
 *
 * los ':' son para decirle al endpoint que va tener un parametro
 * y para obtenerlo seria... req.params.parametro y esto se le asigna
 * a una variable. Si quisieramos mas parametros seria tipo
 *
 * '/categories/:categoryId/products/:productId'
 * const categoryId = req.params.categoryId
 * const productId = req.params.productId
 *
 * y pues si funciona pero que pasa si tenemos muchos parametros??
 * se volveria muy largo, entonces hay una mejor opcion y esa es la
 * ==>> (2)
 *
 */

/**
 * (2)
 * Pero hay otra forma mas bonita y es asi:
 *
 * app.get('/products/:parametro', (req, res) => {
 *  const { parametro } = req.params
 *  @Mas codigo
 * })
 *
 * lo que hacemos con los { } envolviendo a la variable parametro, es que
 * le decimos que solo ocupamos el parametro que tenga el mismo nombre que
 * la variable, y ya. se le asigna a esa misma variable. Si fueran mas
 * parametros como por ejemplo
 *
 * '/categories/:categoryId/products/:productId'
 *
 * se obtienen de la siguiente manera
 *
 * const { categoryId, productId } = req.params
 */


app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter')
})

// recibir parametros de un endpoint/ruta
app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;
  res.json({
    productId,
    name: 'Product 2',
    price: 2000,
  });
});

// recibir dos parametros del endpoint, se obtienen de la misma forma
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId,
    name: 'Product seleccionado',
    price: 'insertar precio',
  });
});

//ruta de categories
app.get('/categories', (req, res) => {
  res.send('Varias categorias proximamente');
});

//ruta de usuarios
// de esta misma podemos sacar los parametros de tipo query del endpoint
// Mira para sacar un query de un endpoint es casi igual que un param
// solo que se usar req.query
// y para que se puede usar, en la barra navegadora escribis por ejemplo
// localhost:3000/users?limit=100&offset=4
// y todo estaria bien

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }

  res.json([
    { name: 'Karol', secondName: 'Mejia', username: 'Karol777' },
    { name: 'Emilio', secondName: 'Larach', username: 'EJLB' },
    { name: 'Joe', secondName: 'Corrales', username: 'Jcorrales07' },
  ]);
});

//ruta de usuario especifico
app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;

  res.json({
    user_id: userId,
    name: 'Karol',
    secondName: 'Mejia',
    username: 'Karol777',
  });
});


// para editar un perfil
app.get('/users/:userId/edit', (req, res) => {
  const { userId } = req.params;
  res.send('Editar cositas de tu perfil');
});

// Siempre tenemos que decirle a nuestra app en que puerto
// tiene que escuchar para poder ejecutarse
app.listen(port, () => {
  console.log('[!] ON [!] port: ' + port);
});
