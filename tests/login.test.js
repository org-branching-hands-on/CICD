const request = require('supertest');
const app = require('../server');

describe('POST /login', () => {
  it('retorna token para credenciais válidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: 'senha' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('retorna 401 para credenciais inválidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'user', password: '1234' });
    expect(res.statusCode).toBe(401);
  });
});
