import { AgendamentoBanco } from "../../../../domain/models/agendamento/agendamento-models";
import {AgendamentoKnexRepository} from "../../../../domain/repositories/agendamento/agendamento-repository"
import { StatusReturn } from "../../../../domain/repositories/statusReturn/statusReturn";
import knex from "../../database";

class AgendamentoKnex implements AgendamentoKnexRepository{

    async getAgendamentos(): Promise<AgendamentoBanco[]> {
        const response = await knex.select('*').from('it_agenda_central')
        return response
    }

    async postAgendamento(agendamento: AgendamentoBanco): Promise<StatusReturn> {
        try{
            console.log(agendamento)
            await knex('it_agenda_central').insert(agendamento)
            return {status: 201, messageClient: 'Agendamento criado com sucesso!'}
        }catch(error){
            return {status: 500, messageClient: 'Erro ao criar agendamento !', messageServer: error}
        }
        
    }

    async putAgendamento(agendamento: AgendamentoBanco): Promise<StatusReturn> {
        return
    }
}

export const agendamentoKnex = new AgendamentoKnex()