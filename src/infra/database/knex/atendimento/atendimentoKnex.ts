import { AtendimentoBanco } from "../../../../domain/models/atendimento/atendimento-models";
import { AtendimentoKnexRepository } from "../../../../domain/repositories/atendimento/atendimento-repository";
import { StatusReturn } from "../../../../domain/repositories/statusReturn/statusReturn";
import knex from "../../database";



class AtendimentoKnex implements AtendimentoKnexRepository{
    async postAtendimento(data: AtendimentoBanco): Promise<StatusReturn> {
        try{
            console.log(data)
            await knex('atendimento').insert(data)
            const responseId = await knex('atendimento').select('cd_atendimento').where({cd_paciente: data.cd_paciente, cd_profissional: data.cd_profissional, cd_procedimento: data.cd_procedimento})
            return {status: 201, messageClient: 'Atendimento criado com sucesso!', messageServer:{ cd_atendimento: responseId[responseId.length-1].cd_atendimento}}
        }catch(error){
            return {status: 500, messageClient: 'Erro ao criar atendimento !', messageServer: error}
        }
        
    }
}

export const atendimentoKnex = new AtendimentoKnex()