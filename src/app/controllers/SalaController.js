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

        return res.status(200).send({ id });
    },

    async index(req, res){
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { page = 1 } = req.query.page;
        const campus = req.query.campus;

        
        if(campus !== null){
            const data = await connection('salas')
                .where('campus', campus)
                .limit(5)
                .offset((page-1) * 5)
                .select('*');

            return res.json(data).end();
        }

        //const [count] = await connection('salas').count();
        
        const data = await connection('salas')
            .limit(5)
            .offset((page-1) * 5)
            .select('*');

        //res.header('X-Total-Count', count['count(*)']);
        return res.send(data).end();
    }
}