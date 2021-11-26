module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Addresses',
      [{
        street: 'Rua Bom Despacho',
        complement: "ap 101",
        number: "155",
        neighborhood: "Santa Tereza",
        city: "Belo Horizonte",
        state: "MG",
        cep: "31010-390",
        doctorId: 1,
      },
      {
        street: "Avenida Afonso Pena",
        complement: "casa",
        number: "605",
        neighborhood: "Afonso Pena",
        city: "Itumbiara",
        state: "GO",
        cep: "75513-540",
        doctorId: 2,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Addresses', null, {});
  },
};
