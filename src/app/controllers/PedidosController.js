const connection = require('../../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res){
        try{
            const { horario_id } = req.body;
            const _id = crypto.randomBytes(5).toString('HEX');
            
            await connection('pedidos').insert({
                _id,
                by: req.userId,
                aprovado: false,
                horario_id
            });
    
            return res.status(200).send('criado com sucesso!');
        }catch(err){
            return res.status(400).send('error');
        }
    },
    async store(req, res){
        const { _id } = req.body;
        await connection('pedidos').where('_id', _id).update('aprovado', 1);
        return res.status(200).send('ok');
    },
    async index(req, res){
        try{
            const data = await connection('pedidos').select('*');
            return res.status(200).send({ data });

        }catch(err){
            return res.status(400).send({ error: 'Erro ao listar itens'});
        }
    }
}