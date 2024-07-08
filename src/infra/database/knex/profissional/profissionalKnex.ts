import { ProfissionalBanco } from "../../../../domain/models/profissional/profissional-models";
import { ProfissionalKnexRepository } from "../../../../domain/repositories/profissional/profissional-repository";
import { StatusReturn } from "../../../../domain/repositories/statusReturn/statusReturn";
import knex from "../../database";



class ProfissionalKnex implements ProfissionalKnexRepository{
    async getProfissionais(): Promise<ProfissionalBanco[] | StatusReturn> {
        try{
            const response: ProfissionalBanco[] = await knex.select('*').from('profissional').where({ativo: 1})
            return response
        }catch(error){
            return {status: 500, messageClient: 'Erro ao buscar profissionais !', messageServer: error}
        }
    }

    async postProfissional(data: ProfissionalBanco): Promise<StatusReturn> {
        try{
            await knex('profissional').insert(data)
            return {status: 201, messageClient: 'Profissional criado com sucesso!'}
        }catch(error){
            return {status: 500, messageClient: 'Erro ao criar profissional !', messageServer: error}
        }
    }

    async putProfissional(data: ProfissionalBanco, cd_profissional: number): Promise<StatusReturn> {

        try{
            await knex('profissional').where({cd_profissional}).update(data)
            return {status: 200, messageClient: 'Profissional atualizado com sucesso!'}
        }catch(error){
            return {status: 500, messageClient: 'Erro ao atualizar profissional !', messageServer: error}
        }
    }
}

export const profissionalKnex = new ProfissionalKnex()