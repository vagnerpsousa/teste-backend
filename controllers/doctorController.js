const express = require('express');

const router = express.Router();
const doctorService = require('../services/doctorService');
const validateDoctor = require('../middlewares/validadeDoctor');
const addressSearchApi = require('../utils/addressSearchApi');

const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_NO_CONTENT = 204;
const NOT_FOUND = 404;

router.post('/', validateDoctor, async (req, res, next) => {
  try {

    const address = await addressSearchApi(req.body.cep);

    const doctor = await doctorService.create(req.body, address);

    res.status(HTTP_CREATED).json(doctor);

  } catch (error) {

    next(error)

  }
});

router.get('/', async (_req, res, next) => {
  try {

    const doctors = await doctorService.getAll();

    return res.status(HTTP_OK).json(doctors);

  } catch (error) {

    next(error)
    
  }

});

router.get('/:id', async (req, res, next) => {
  const doctor = await doctorService.getById(req.params.id);

  if (!doctor[0]) res.status(NOT_FOUND).json({ message: 'Doctor does not exist' });

  return res.status(HTTP_OK).json(doctor);
});

router.put('/:id', validateDoctor, async (req, res, _next) => {

  const { id } = req.params;

  const doctor = await doctorService.getById(id);

  if (!doctor[0]) res.status(NOT_FOUND).json({ message: 'Doctor does not exist' });

  const address = await addressSearchApi(req.body.cep);

  const newDoctor = await doctorService.updateById(id, req.body, address);

  return res.status(HTTP_OK).json(newDoctor);
});

router.delete('/:id', async (req, res, _next) => {

  const { id } = req.params;

  const doctor = await doctorService.getById(id);

  if (!doctor[0]) res.status(NOT_FOUND).json({ message: 'Doctor does not exist' });

  await doctorService.deleteById(id);

  return res.status(HTTP_NO_CONTENT).json({ message: 'Doctor was deleted' });
});



module.exports = router;