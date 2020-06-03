const routes = require('express').Router();
const sala = require('./app/controllers/SalaController');
const horario = require('./app/controllers/HorarioController');
const usuario = require('./app/controllers/UserController');
const pedido = require('./app/controllers/PedidosController');
const authMiddlewares = require("./app/middlewares/auth");

routes.post('/room/list', sala.index);
routes.post('/room/create', sala.store);

routes.get('/time/list', horario.index);
routes.get('/time/show', horario.show);

routes.post('/user/create', usuario.create);
routes.post('/user/login', usuario.store);

routes.post('/time/create', horario.create);
routes.delete('/time/delete/:id', horario.delete);

routes.use(authMiddlewares);

routes.post('/request/create', pedido.create);
routes.patch('/request/aprove', pedido.store);
routes.get('/request/list', pedido.index);

module.exports = routes;