const knex = require('../database/dbConfig');

module.exports = {
    
    async index(req, res){
        const jogadores = await knex('jogadores')
                                .select('j.id', 'j.nome', 'j.foto', 'j.idade', 'j.anos_liga', 't.nome as time', 'p.nome as posicao')
                                .from('jogadores as j')
                                .leftJoin('times as t', 'j.time_id', 't.id')
                                .leftJoin('posicoes as p', 'j.posicao_id', 'p.id')
                                .orderBy('j.id', 'desc');
        
        res.status(200).json(jogadores);
    },

    async store(req, res){

        const { nome, foto, idade, anos_liga, time_id, posicao_id} = req.body;

        if(!nome || !foto || !idade ||!anos_liga ||!time_id ||!posicao_id){
            res.status(400).json({erro: 'Por favor preencha todos os campos'})
            return;
        }

        try{
            const novo = await knex('jogadores').insert({nome, foto, idade, anos_liga, time_id, posicao_id})
            res.status(201).json({id: novo[0]})
        } catch (error){
            res.status(400).json({erro: error.message})
        }

    },

    async update (req, res){
        
        const id = req.params.id
        const { idade, anos_liga, time_id } = req.body

        try{
            const atualizacao = await knex('jogadores').update({idade, anos_liga, time_id}).where({id})
            res.status(201).json({msg: `Registro ${id} alterado com sucesso.`})
        } catch(error){
            res.status(400).json({msg: error.message})
        }

    },

    async destroy (req, res){
        const id = req.params.id

        try{
            await knex('jogadores').del().where({ id })
            res.status(200).json({msg: `Registro excluído com sucesso.`})
        } catch (error){
            res.status(400).json({msg: error.msg})
        }
    }



}