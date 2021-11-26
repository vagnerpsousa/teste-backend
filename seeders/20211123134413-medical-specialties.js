module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('MedicalSpecialties',
      [
        {
          id: 1,
          specialtyName: 'Alergologia',
        },
        {
          id: 2,
          specialtyName: 'Angiologia',
        },
        {
          id: 3,
          specialtyName: 'Buco maxilo',
        },
        {
          id: 4,
          specialtyName: 'Cardiologia clínca',
        },
        {
          id: 5,
          specialtyName: 'Cardiologia infantil',
        },
        {
          id: 6,
          specialtyName: 'Cirurgia cabeça e pescoço',
        },
        {
          id: 7,
          specialtyName: 'Cirurgia cardíaca',
        },
        {
          id: 8,
          specialtyName: 'Cirurgia de tórax',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('MedicalSpecialties', null, {});
  },
};
