const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

//Este es un middleware para que el POST pueda obtener la info del body
app.use(express.json());
//==>

app.use(cors());

const whitelist = [
  'http://localhost:5500',
  'https://myapp.co',
  'http://localhost:3000',
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin || !origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

routerApi(app);
//Implementacion de Middlewares de forma secuencial
//tener cuidado como se ponen, por ejemplo si pones
//errorHandler primero, el logErrors no se ejecutaria...
//por que errorHandler no ejecuta next()
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`running in localhost:${port}`);
});
