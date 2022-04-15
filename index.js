const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

//Este es un middleware para que el POST pueda obtener la info del body
app.use(express.json());
//==>

routerApi(app);
//Implementacion de Middlewares de forma secuencial
//tener cuidado como se ponen, por ejemplo si pones
//errorHandler primero, el logErrors no se ejecutaria...
//por que errorHandler no ejecuta next()
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`running in localhost:${port}`);
});
