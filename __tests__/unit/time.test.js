const request = require('supertest');
const connection = require('../../src/database/connection');
const app = require('../../src/app');
const crypto = require('crypto');

//d0116f

describe('Create a new time', () => {
  it('Should create a new time for the room d0116f', async () => {
      const id = crypto.randomBytes(3).toString('HEX');

      const response = await request(app)
        .post('/time/create')
        .send({
            inicio: "9:00",
            fim: "10:00",
            ocupado: false,
            codigo: "2939123",
            sala_id: "d0116f"
        })

      expect(response.status).toBe(200);
  });
});

describe('List times', () => {
  it('Should be list all times', async() =>{
      const response = await request(app).get('/time/list');

      expect(response.status).toBe(200);
  });
});
