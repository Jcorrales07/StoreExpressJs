const express = require('express');
const faker = require('faker');

const router = express.Router()

//ruta de products
router.get('/', (req, res) => {
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


router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// recibir parametros de un endpoint/ruta
router.get('/:productId', (req, res) => {
  const { productId } = req.params;

  if(productId === '999') {
    res.status(404).json({
      message: '404 not found'
    })
  }


  res.json({
    productId,
    name: 'Product 2',
    price: 2000,
  });
});

//Uso del metodo POST
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

//Uso del metodo patch para poder actualizar algo parcialmente
router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body;

  res.json({
    message: 'update',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    message: 'deleted',
    id,
  })
})


// el router de products se hace un modulo exportable
module.exports = router;
