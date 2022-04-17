const express = require('express');

const ProductsService = require('../services/productsService');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/productsSchema');

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
router.get(
  '/:productId',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { productId } = req.params;
      const product = await service.findOne(productId);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);

//Uso del metodo POST
router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;

    const newProduct = await service.create(body);

    res.status(201).json(newProduct);
  }
);

//Uso del metodo patch para poder actualizar algo parcialmente
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const upProduct = await service.update(id, body);
    res.json(upProduct);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const productDeleted = await service.delete(id);

  res.json(productDeleted);
});

// el router de products se hace un modulo exportable
module.exports = router;
