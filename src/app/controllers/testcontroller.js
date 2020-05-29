const crypto = require('crypto');
const connection = require('../../database/connection');


module.exports = { 
    async index(req,res){
        const { nome, local, capacidade, campus, interditada } = req.body;

        const id = crypto.randomBytes(3).toString('HEX');

        await connection('salas').insert({
            nome,
            local,
            capacidade,
            campus,
            interditada,
        })

        return res.send({ id });
    }
}