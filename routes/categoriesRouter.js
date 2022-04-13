const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
  res.json({
    categories: 50
  })
})

router.get('/filter', (req, res) => {
  res.send('Soy el filter de categories')
})

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params

  res.json({
    categoryId: categoryId,
    category: 'La que pediste'
  })
})

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId,
    name: 'Product seleccionado',
    price: 'insertar precio',
  });
});

module.exports = router
