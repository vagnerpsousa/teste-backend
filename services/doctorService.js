const { between } = require('sequelize/dist/lib/operators');
const { Doctor, Address, DoctorSpecialty, MedicalSpecialty } = require('../models');

const create = async (body, address) => {

  const {
    logradouro: street,
    bairro: neighborhood,
    localidade: city,
    uf: state,
    cep,
  } = address;

  const { medicalSpecialty } = body
  
  const doctor = await Doctor.create({ ...body, exclude: medicalSpecialty });

  await Address.create({
    street,
    complement: body.complement,
    number: body.number,
    neighborhood,
    city,
    state,
    cep,
    doctorId: doctor.id
  });

  medicalSpecialty.forEach((specialtyId) => {
    DoctorSpecialty.create({ doctorId: doctor.id, specialtyId })
  })

  return doctor;
};

const updateById = async (id, body, address) => {

  const {
    logradouro: street,
    bairro: neighborhood,
    localidade: city,
    uf: state,
    cep,
  } = address;

  const doctor = await Doctor.update({ ...body }, { where: { id } });

  await Address.update({
    street,
    complement: body.complement,
    number: body.number,
    neighborhood,
    city,
    state,
    cep,
    doctorId: doctor.id
  }, { where: { doctorId: id } });

  const newDoctor = await getById(id);

  return newDoctor;
};

const deleteById = async (id) => {

  await Doctor.destroy({ where: { id } });

  await Address.destroy({ where: { doctorId: id } });

  await DoctorSpecialty.destroy({ where: { doctorId: id }})
}

const getAll = async () => {

  const doctors = await Doctor.findAll({});

  return doctors;
};

const getById = async (id) => {

  const doctor = await Doctor.findOne({ where: { id } });

  const address = await Address.findOne({ where: { doctorId: id } });

  const doctorSpecialty = await DoctorSpecialty.findAll({ where: { doctorId: id }});

  const ids = [];

  doctorSpecialty.forEach((specialty) => {
    ids.push(specialty.dataValues.specialtyId)
  })
  
  let aux = '';

  aux = await MedicalSpecialty.findOne({ where: { id}})

  return [doctor, address, aux];
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};