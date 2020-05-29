const routes = require('express').Router();
const sala = require('./app/controllers/SalaController');
const horario = require('./app/controllers/HorarioController');

routes.get('/room/list', sala.index);
routes.post('/room/create', sala.store);

routes.get('/time/list', horario.index);
routes.post('/time/create', horario.create);
routes.delete('/time/delete/:id', horario.delete);
routes.get('/time/show', horario.show);

module.exports = routes;