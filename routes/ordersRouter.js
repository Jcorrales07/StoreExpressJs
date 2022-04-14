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

router.post('/', (req, res) => {
  const body = req.params;

  res.json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.params;

  res.json({
    message: 'updated',
    data: body,
    id: id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id,
  })
});

module.exports = router;
