const connection = require('../../database/connection');

module.exports = {
    async create(req, res){
        const { _id, by, horario_id } = req.body;
        
        return res.status(200).send('ok');
    },
    async store(req, res){
        const { _id } = req.body;
        
        return res.status(200).send('ok');
    }
}