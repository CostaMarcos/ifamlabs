const connection = require('../../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async create(req, res){
        const { nome, campus, tipo, password_hash } = req.body;

        return res.status(200).send('Usuário criado!');
    },
    async store(req, res){
        const { nome, password } = req.body;

        return res.status(200).send('ok');
    }
}