const request = require('supertest');
const crypto = require('crypto');
const app = require('../../src/app');

describe('Create a new request', () => {
  it('Should create a new request with valid credentials', async() => {
    const id = crypto.randomBytes(3).toString('HEX');
    const by = crypto.randomBytes(3).toString('HEX');
    const horario_id = crypto.randomBytes(3).toString('HEX');

    const response = await request(app)
        .post('/request/create')
        .send({
            _id: id,
            by,
            horario_id,
        });
    expect(response.status).toBe(200);
  });
});

describe('Aprove a request', () => {
  it('should aprove a request', async() =>{
    const response = await request(app)
      .post('/request/aprove')
      .send({ _id: 'teste' });
    
    expect(response.status).toBe(200);
  })
})