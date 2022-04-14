const express = require('express');
const ProductsService = require('../services/productsService');

const router = express.Router();
const service = new ProductsService();

//ruta de products
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// recibir parametros de un endpoint/ruta
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  const product = await service.findOne(productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).send(`<h3>Product not found</h3>`);
  }
});

//Uso del metodo POST
router.post('/', async (req, res) => {
  const body = req.body;

  const newProduct = await service.create(body);

  res.json(newProduct);
});

//Uso del metodo patch para poder actualizar algo parcialmente
router.patch('/:id', async (req, res) => {

  try {
    const { id } = req.params;
    const body = req.body;
    const upProduct = await service.update(id, body);
    res.json(upProduct);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const productDeleted = await service.delete(id)

  res.json(productDeleted)
});

// el router de products se hace un modulo exportable
module.exports = router;
