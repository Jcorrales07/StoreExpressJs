const express = require('express')
const UsersService = require('./../services/usersService')

const router = express.Router()
const service = new UsersService()

router.get('/', (req, res) => {
  // const { limit, offset } = req.query;
  // if (limit && offset) {
  //   res.json({
  //     limit,
  //     offset,
  //   });
  // } else {
  //   res.send('No hay parametros');
  // }

  const users = service.find()
  res.json(users)

});

//ruta de usuario especifico
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const user = service.findOne(userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send(`<h3 style=\"color: rebeccapurple\">Cagaste wachin</h3>`)
  }
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
