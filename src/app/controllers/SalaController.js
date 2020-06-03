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
        const { page = 1 } = req.body;
        const campus = req.body.campus;

        console.log(campus);
        if(req.body.campus !== null){
            //const [count] = await connection('salas').where('campus', 'cmdi').count();

            const data = await connection('salas')
                .where('campus', 'cmdi')
                .limit(5)
                .offset((page-1) * 5)
                .select('*');

            //res.header('X-Total-Count', count['count(*)']);
            return res.json(data);

        }

        //const [count] = await connection('salas').count();

        const data = await connection('salas')
            .limit(5)
            .offset((page-1) * 5)
            .select('*');

        //res.header('X-Total-Count', count['count(*)']);
        return res.json(data);
    }
}