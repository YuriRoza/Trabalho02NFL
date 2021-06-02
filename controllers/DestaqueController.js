const knex = require('../database/dbConfig');

module.exports = {
    
    async update(req, res) {
        const id = req.params.id

        try{
            const destacar = await knex('jogadores').where({id})
            if (destacar[0].destaque){
                muda = await knex('jogadores').where({id}).update({destaque: false})
                res.status(201).json({msg: `Registro ${id} saiu dos destaques`})
            }else {
                muda = await knex('jogadores').where({id}).update({destaque: true})
                res.status(201).json({msg: `Registro ${id} entrou nos destaques`})
            }

        } catch (error){
            res.status(400).json({msg: error.message})
        }
    },

    async index(req, res) {

        const destaques = await knex('jogadores').select('j.nome', 'j.foto', 't.nome as time', 'p.nome as posicao')
                                                .from('jogadores as j')
                                                .leftJoin('times as t', 'j.time_id', 't.id')
                                                .leftJoin('posicoes as p', 'j.posicao_id', 'p.id')
                                                .where('j.destaque', '=', true)
                                                .orderBy('j.nome');

        res.status(200).json(destaques)
    }






}