const routes = require('express').Router();
const teste = require('./app/controllers/testcontroller');

routes.get('/', teste.index);

module.exports = routes;