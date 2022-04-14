const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;


//Este es un middleware para que el POST pueda obtener la info del body
app.use(express.json())
//==>

routerApi(app);

app.listen(port, () => {
  console.log(`running in localhost:${port}`);
});
