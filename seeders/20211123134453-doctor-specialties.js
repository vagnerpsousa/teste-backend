module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('DoctorSpecialties',
      [
        {
          doctorId: 1,
          specialtyId: 8,
        },
        {
          doctorId: 1,
          specialtyId: 6,
        },
        {
          doctorId: 2,
          specialtyId: 2,
        },
        {
          doctorId: 1,
          specialtyId: 3,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('DoctorSpecialties', null, {});
  },
};

