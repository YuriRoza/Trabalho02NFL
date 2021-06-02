const knex = require('../database/dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    async index(req, res) {
        const usuarios = await knex('usuarios')
        res.status(200).json(usuarios)
    },

    async store (req, res) {

        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha ){
            res.status(400).json({erro: 'Por favor preencha todos os dados.'})
            return;
        }

        try {
            const dados = await knex('usuarios').where({ email })
            if (dados.length) {
                res.status(400).json({ erro: 'E-mail já cadastrado'})
                return;
            }
        } catch (error){
                res.status(400).json({ erro: error.message })
            }
            
        const hash = bcrypt.hashSync(senha, 10);

        try {
            const novo = await knex('usuarios').insert({ nome, email, senha: hash })
            res.status(201).json({ id: novo [0] })
        } catch (error){
            res.status(400).json({ erro: error.message })
        }
    },

    async login (req, res) {

        const { email, senha } = req.body;

        if(!email || !senha) {
            res.status(400).json({ erro: 'Login inválido' })
            return;
        }

        try {
            const dados = await knex('usuarios').where({email});
            if (dados.length == 0){
                res.status(400).json({ erro: 'Login inválido' })
                return;
            }

            if (bcrypt.compareSync(senha, dados[0].senha)){
                const token = jwt.sign({usuario_id: dados[0].id, usuario_nome: dados[0].nome}, process.env.JWT_KEY, { expiresIn: '1h'})
                res.status(200).json({ msg: 'Login feito com sucesso', token })
            } else {
                res.status(400).json({ erro: 'Login inválido' })
            }
        } catch (error){
            res.status(400).json({ erro: error.message })
        }



    }


}



