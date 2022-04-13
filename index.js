const express = require('express')
const faker = require('faker')
const routerApi = require('./routes')

const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Home page')
})

routerApi(app)


app.listen(port, () => {
  console.log(`port: ${port}`)
})
