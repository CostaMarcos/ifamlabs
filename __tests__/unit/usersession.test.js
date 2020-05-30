const request = require('supertest');
const connection = require('../../src/database/connection');
const app = require('../../src/app');
const crypto = require('crypto');

describe('Create a new user', () => {
  it('Should create a new user with valid credentials', async () => { 
      const id = crypto.randomBytes(3).toString('HEX');

      const response = await request(app)
        .post('/user/create')
        .send({
            user_id: id, 
            nome: "newUserTest",
            campus: "cmzl",
            tipo: true,
            password: "123"
        });
      expect(response.status).toBe(200);
  });
});

describe('Login', () =>{
  it('Should create a new session', async () => {
      const response = await request(app)
        .post('/user/login')
        .send({
            nome: "newUserTest",
            password: "123"
        });

      expect(response.status).toBe(200);
  })
})