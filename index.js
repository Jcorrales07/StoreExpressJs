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

router.get('/', (req, res) => {
  res.status(201).send(`Bueno, hola JASDJASA yo se que esta no es la mejor interfaz de todas pero es legible 😎<br>
    Bueno, contexto. esta seria la pagina de inicio o el 'Home Page', pero bueno no he hecho nada de eso por que me da hueva
    si quieren acceder a otra rutas (endpoints) por ejemplo ver los usuario de la app, escriban en el buscador
    obscure-springs-19379.herokuapp.com/api/v1/users y ahi les va salir los usuarios o si quieren ver los prroductos... van a poner
    obscure-springs-19379.herokuapp.com/api/v1/products y asi...
  `)
})


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
