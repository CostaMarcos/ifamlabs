const connection = require('../../database/connection');

module.exports = {
    async index(req, res){
        const horarios = await connection('horarios').select('*');

        return res.send(horarios);
    },

    async show(req, res){
        const sala_id = req.headers.room;

        const data = await connection('horarios').where('sala_id', sala_id);
        return res.send(data);
    },

    async delete(req, res){
        const { id } = req.params;
        const sala_id = req.headers.room;

        const horario = await connection('horarios')
            .where('id', id)
            .select('sala_id')
            .first();
        if(horario.sala_id !== sala_id){
            return res.status(401).send({ error: 'Não autorizado'});
        }

        await connection('horarios').where('id', id).delete();

        return res.status(204).send();
    },

    async create(req, res){
        const { inicio, fim, ocupado } = req.body;
        const sala_id = req.headers.room;
        
        const [id] = await connection('horarios').insert({
            inicio,
            fim,
            ocupado,
            sala_id
        });

        return res.send({ id });
    }
}