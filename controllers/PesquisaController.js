const knex = require('../database/dbConfig');

module.exports = {
    async index (req, res){

        const { palavra } = req.params

        try{
            const jogadores = await knex('jogadores').select('j.nome', 'j.foto', 'j.idade', 't.nome as time', 'p.nome as posicao')
                                                    .from('jogadores as j')
                                                    .leftJoin('times as t', 'j.time_id', 't.id')
                                                    .leftJoin('posicoes as p', 'j.posicao_id', 'p.id')
                                                    .where('j.nome', 'like', `%${palavra}`)
            if(jogadores.length == 0){
                res.status(200).json({msg: 'Não existem jogadores com o nome informado'})
            } else {
                res.status(200).json(jogadores)
            }
        } catch (error){
            res.status(400).json({msg: error.message})
        }
    },

    async jogadorTime (req, res){

        const { time } = req.params

        try{
            const jogadores = await knex('jogadores').select('j.nome', 'j.idade', 't.nome as time', 'p.nome as posicao')
                                                    .from('jogadores as j')
                                                    .leftJoin('times as t', 'j.time_id', 't.id')
                                                    .leftJoin('posicoes as p', 'j.posicao_id', 'p.id')
                                                    .where('t.nome', 'like', `%${time}`)
                                                    .orderBy('p.id')
            
            if(jogadores.lenght == 0){
                res.status(200).json({msg: 'Não há jogadores no time informado.'})
            } else {
                res.status(200).json(jogadores)
            }
        } catch (error){
            res.status(400).json({msg: error.message})
        }
    }
}