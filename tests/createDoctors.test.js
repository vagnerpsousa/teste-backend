const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('1 - Sua aplicação deve ter o endpoint POST `/doctors`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });

  it('Será validado que é possível cadastrar um médico com sucesso', async () => {
    await frisby
      .post(`${url}/doctors`,
        {
            name: "vagner",
            crm: "1234568",
            landLine: "123456789",
            cellPhone: "99999999",
            cep: 35634184,
            complement: "ap 802",
            number: "125",
            medicalSpecialty: [1, 2]
        })
      .expect('status', 201)
      .then((response) => {
        expect(response).not.toBeNull();
      });
  });

 
});
