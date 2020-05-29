const routes = require('express').Router();
const teste = require('./app/controllers/testcontroller');

routes.post('/create/room', teste.index);

module.exports = routes;