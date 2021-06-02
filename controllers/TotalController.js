const knex = require('../database/dbConfig');

module.exports = {
    async index(req, res) {
        try {
            // const estatisticas = await knex('jogadores as j')
            //                     .leftJoin('times as t', 'j.time_id', 't.id')
            //                     .leftJoin('posicoes as p', 'j.posicao_id','p.id')
            //                     .count('j.id as total de jogadores')
            //                     .countDistinct('j.time_id as quantidade de times')
            //                     .countDistinct('j.posicao_id as quantidade de posições')
            //                     .max('j.anos_liga as maior nº de anos na liga')
            //                     .avg('j.idade as média de idade')
            //                     .avg('j.anos_liga as média de anos na liga')

            const estatisticas = await knex('jogadores')
                                    .count({total: '*'})
                                    .countDistinct({times: 'time_id'})
                                    .countDistinct({posicoes: 'posicao_id'})
                                    .max({maiorTempoLiga: 'anos_liga'})
                                    .avg({mediaIdade: 'idade'})
                                    .avg({mediaExperiencia: 'anos_liga'})
            const {total, times, posicoes, maiorTempoLiga, mediaIdade, mediaExperiencia} = estatisticas[0]

            res.status(200).json({total, times, posicoes, maiorTempoLiga, mediaIdade: Number(mediaIdade).toFixed(0), mediaExperiencia: Number(mediaExperiencia).toFixed(0)})
        } catch (error){
            res.status(400).json({msg: error.message})
        }
    },

    async timeJogador(req, res) {
        try {
            const dados = await knex('jogadores')
                                .select('time_id').count('time_id as nº de jogadores').from('jogadores').groupBy('time_id')
            res.status(200).json(dados)
        } catch (error){
            res.status(400).json({msg: error.message})
        }
    },

    async posicaoJogador(req, res) {
        try {
            const dados = await knex('jogadores')
                                .select('posicao_id').count('posicao_id as nº de jogadores').from('jogadores').groupBy('posicao_id')
            res.status(200).json(dados)
        } catch (error){
            res.status(400).json({msg: error.message})
        }
    }

}