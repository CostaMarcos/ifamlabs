const request = require('supertest');
const connection = require('../../src/database/connection');
const app = require('../../src/app');

describe('Create', () => {
  it('Should be create a new room with valid credentials', async() => {

    const response = await request(app)
        .post('/room/create')
        .send({
            nome: "teste1",
            local: "teste1",
            capacidade: 0,
            campus: "cmzl",
            interditada: false,
        })
    
    const code = response.id;

    expect(response.status).toBe(200);
  });
});

describe('List rooms', () => {
  it('should return a list of rooms', async () => {
    const response = await request(app).get('/room/list');

    expect(response.status).toBe(200);
  });
});