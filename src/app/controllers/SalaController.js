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
        const { page = 1 } = req.query;
        const { campus } = req.query;

        if(campus){
            const [count] = await connection('salas').where('campus', campus).count();

            const data = await connection('salas')
            .where('campus', campus)
            .limit(5)
            .offset((page-1) * 5)
            .select('*');

            res.header('X-Total-Count', count['count(*)']);
            return res.send(data);

        }

        const [count] = await connection('salas').count();

        const data = await connection('salas')
            .limit(5)
            .offset((page-1) * 5)
            .select('*');
        
        res.header('X-Total-Count', count['count(*)']);
        return res.send(data);
    }
}