const crypto = require('crypto');
const connection = require('../../database/connection');


module.exports = { 
    async store(req, res){
        const { nome, local, capacidade, campus, interditada } = req.body;

        const id = crypto.randomBytes(3).toString('HEX');

        await connection('salas').insert({
            id,
            nome,
            local,
            capacidade,
            campus,
            interditada,
        })

        return res.send({ id });
    },
    async index(req, res){
        const data = await connection('salas').select('*');

        return res.send(data);
    }
}