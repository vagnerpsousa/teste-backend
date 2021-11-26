const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('4 - Sua aplicação deve ter o endpoint PUT `/doctors/:id`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
    shell.exec('npx sequelize-cli db:seed:all');
  });

  it('Será validado que é possível editar um médico com sucesso', async () => {
    await frisby
      .put(`${url}/doctors/1`, {
        name: 'Antonio de Almeida',
        crm: '888888',
        landLine: '55555555',
        cellPhone: '55555555',
        cep: '55294848',
        complement: 'beco 3',
        number: "1000",
        medicalSpecialty: [1, 2]
      })
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json[0].name).toBe('Antonio de Almeida');
        expect(json[0].crm).toBe('888888');
        expect(json[0].landLine).toBe('55555555');
        expect(json[1].street).toBe('Rua Arlindo Ouro Preto');
        
        
      });
  });
});
