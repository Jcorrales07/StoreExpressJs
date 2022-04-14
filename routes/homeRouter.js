const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(201).send('Landing page')
})

router.get('/home', (req, res) => {
  res.status(201).send('Home page')
})

module.exports = router


