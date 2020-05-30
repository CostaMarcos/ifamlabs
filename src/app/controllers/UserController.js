const connection = require('../../database/connection');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });
}
  
module.exports = {
    async create(req, res){
        try{

        }catch(err){
            return res.status(400).send({ error: 'Erro ao criar novo usuário'});
        }
        const { nome, campus, tipo, password } = req.body;

        const user_id = crypto.randomBytes(4).toString('HEX');

        bcrypt.genSalt(10,function(err,salt){  
            bcrypt.hash(password, salt, async function(err,hash){  
                await connection('usuarios').insert({
                    user_id,
                    nome,
                    campus,
                    tipo,
                    password_hash: hash
                }); 
            });  
        });

        return res.status(200).send({ user_id });
    },

    async store(req, res){
        const { nome, password } = req.body;

        const [data] = await connection('usuarios').where('nome', nome).select('password_hash');
        
        if(data){
            bcrypt.compare(password, data, async function(err,result){
                const [dados] = await connection('usuarios').where('nome', nome).select('nome', 'campus', 'tipo', 'user_id');

                return res.status(200).send({
                    dados,
                    token: generateToken({ id: dados.user_id }),
                }); 
            });           
        }else{
            return res.status(400).send('Usuário ou senha inválido');
        }
    }
}