module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Doctors',
      [{
        id: 1,
        name: 'José Antônio',
        crm: 111111,
        landLine: 35559966,
        cellPhone: 99999999,
        cep: 31010390
      },
      {
        id: 2,
        name: 'Antônio José',
        crm: 222222,
        landLine: 35558866,
        cellPhone: 91234567,
        cep: 75513-540
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Doctors', null, {});
  },
};
