const Joi = require('joi');

const maxCharacterName = 120;
const maxNumbersCrm = 7;
const minMedicalSpecialty = 2;

const schema = Joi.object({
  name: Joi.string().max(maxCharacterName).required(),
  crm: Joi.string().max(maxNumbersCrm).required(),
  landLine: Joi.number().required(),
  cellPhone: Joi.number().required(),
  cep: Joi.number().required(),
  complement: Joi.string().required(),
  number: Joi.string().required(),
  medicalSpecialty: Joi.array().min(minMedicalSpecialty).required(),
});

module.exports = async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return next(error);

  next();
};
