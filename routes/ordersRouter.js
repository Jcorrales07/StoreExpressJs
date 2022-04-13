//otra forma de hacer un router es asi
const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    id: 1,
    client: 'Laura',
    product: 'Sky',
  });
});

router.get('/:orderId', (req, res) => {
  const { orderId } = req.params;
  res.json({
    orderId: orderId,
    client: 'Cliente',
    product: 'Producto',
  });
});

module.exports = router;
