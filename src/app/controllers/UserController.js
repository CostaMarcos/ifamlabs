const connection = require('../../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async create(req, res){
            const { nome, campus, tipo, password } = req.body;

            const rounds = 10

            const teste = bcrypt.hash(password, rounds, (err, hash) => {
                if (err) {
                console.error(err)
                return
            }
            const senha = hash;
            return senha;
            });
            const x = teste;

            console.log(x);

            /**if(!(await bcrypt.compare(password, teste))){
                console.log('deu errado');
            };
            console.log('deu certo!'); */

            /**await connection('usuarios').insert({
                nome,
                campus,
                tipo,
                password_hash
            }); */

            return res.send('Usuário criado!');
    }
}