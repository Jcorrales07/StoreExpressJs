const Joi = require('joi');

const id = Joi.string().uuid();

//Formato de cada campo
const pName = Joi.string().min(3).max(15);
const pPrice = Joi.number().integer().min(10);
const image = Joi.string().uri()

//Schemas o reglas
const createProductSchema = Joi.object({
  name: pName.required(),
  price: pPrice.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: pName,
  price: pPrice,
  image: image
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
