const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  // if (limit && offset) {
  //   res.json({
  //     limit,
  //     offset,
  //   });
  // } else {
  //   res.send('No hay parametros');
  // }

  res.json([
    { name: 'Karol', secondName: 'Mejia', username: 'Karol777' },
    { name: 'Emilio', secondName: 'Larach', username: 'EJLB' },
    { name: 'Joe', secondName: 'Corrales', username: 'Jcorrales07' },
  ]);
});

//ruta de usuario especifico
router.get('/:userId', (req, res) => {
  const { userId } = req.params;

  const users = [
    { id: 0, name: 'Karol', secondName: 'Mejia', username: 'Karol777' },
    { id: 1, name: 'Emilio', secondName: 'Larach', username: 'EJLB' },
    { id: 2, name: 'Joe', secondName: 'Corrales', username: 'Jcorrales07' },
  ];

  res.json({
    user_id: userId,
    name: 'Karol',
    secondName: 'Mejia',
    username: 'Karol777',
  });
});

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'created',
    data: body
  })
})


router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
    message: 'updated',
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

module.exports = router
