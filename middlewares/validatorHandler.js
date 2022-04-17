const boom = require('@hapi/boom');

//Esta es una funcion que crea middlewares de forma dinamica
//No le entiendo aun la verdad
function validatorHandler(schema, property) {
  //closure
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
