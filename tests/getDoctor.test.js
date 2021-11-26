const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('2 - Sua aplicação deve ter o endpoint GET `/doctors`', () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:drop');
        shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
        shell.exec('npx sequelize-cli db:seed:all');
    });

    it('Será validado que é possível listar todos os médicos', async () => {
        await frisby
            .get(`${url}/doctors`)
            .expect('status', 200)
            .then((responseSales) => {
                const { json } = responseSales;
                const firstDoctor = json[0];
                const secondDoctor = json[1];
                expect(firstDoctor.name).toBe('José Antônio');
                expect(firstDoctor.crm).toBe('111111');
                expect(firstDoctor.cellPhone).toBe('99999999');
                expect(secondDoctor.name).toBe('Antônio José');
                expect(secondDoctor.crm).toBe('222222');
                expect(secondDoctor.cellPhone).toBe('91234567');
            });
    });
});
