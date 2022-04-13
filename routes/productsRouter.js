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
  res.json({
    productId,
    name: 'Product 2',
    price: 2000,
  });
});

// el router de products se hace un modulo exportable
module.exports = router;
