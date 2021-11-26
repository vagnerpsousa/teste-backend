const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('3- Sua aplicação deve ter o endpoint GET `/doctors/:id`', () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:drop');
        shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
        shell.exec('npx sequelize-cli db:seed:all');
    });

    it('Será validado que é possível listar um médico específico com sucesso', async () => {
        await frisby
            .get(`${url}/doctors/1`)
            .expect('status', 200)
            .then((response) => {
                const { body } = response;
                const result = JSON.parse(body);
                expect(result[0].id).toBe(1);
                expect(result[0].name).toBe('José Antônio');
                expect(result[0].crm).toBe('111111');
                expect(result[0].cellPhone).toBe('99999999');
            });
    });

    it('Será validado que não é possível listar um médico inexistente', async () => {
        await frisby
            .get(`${url}/doctors/9999`)
            .expect('status', 404)
            .then((response) => {
                const { body } = response;
                const result = JSON.parse(body);
                expect(result.message).toBe('Doctor does not exist');
            });
    });
});
