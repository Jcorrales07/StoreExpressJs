const homeRouter = require('./homeRouter')
const productsRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')
const categoriesRouter = require('./categoriesRouter')
const ordersRouter = require('./ordersRouter')

function routerApi(app) {
  app.use('/', homeRouter)
  app.use('/products', productsRouter)
  app.use('/users', usersRouter)
  app.use('/categories', categoriesRouter)
  app.use('/orders', ordersRouter)
}

module.exports = routerApi
