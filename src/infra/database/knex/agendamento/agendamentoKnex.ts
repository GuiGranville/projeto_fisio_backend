import { AgendamentoBanco, ProcedimentoBanco, SalaBanco } from "../../../../domain/models/agendamento/agendamento-models";
import {AgendamentoKnexRepository} from "../../../../domain/repositories/agendamento/agendamento-repository"
import { StatusReturn } from "../../../../domain/repositories/statusReturn/statusReturn";
import knex from "../../database";

class AgendamentoKnex implements AgendamentoKnexRepository{

    async getAgendamentos(): Promise<AgendamentoBanco[]> {
        const response = await knex.raw(`
            select 
            agenda.cd_it_agenda_central,
            paciente.cd_paciente, 
            paciente.nm_paciente, 
            profissional.cd_profissional,
            profissional.nm_profissional,
            TO_TIMESTAMP(CONCAT(agenda.dt_inicio, ' ', agenda.hr_inicio), 'YYYY-MM-DD HH24:MI:SS') AS dt_inicio,
            TO_TIMESTAMP(CONCAT(agenda.dt_inicio, ' ', agenda.hr_fim), 'YYYY-MM-DD HH24:MI:SS') AS dt_fim
            from it_agenda_central as agenda
            join paciente on paciente.cd_paciente = agenda.cd_paciente
            join profissional on profissional.cd_profissional = agenda.cd_profissional
            `)
            console.log(response.rows)
        return response.rows
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

    async getProcedimentos(): Promise<ProcedimentoBanco[] | StatusReturn> {

        try{
            const response = await knex.select('*').from('procedimento')
            return response
        }catch(err){
            console.log(err)
            return {status: 500, messageClient: 'Erro ao buscar procedimentos !', messageServer: err}
        }  
        
    }

    async getSalas(): Promise<SalaBanco[] | StatusReturn> {

        try{
            const response = await knex.select('*').from('sala')
            return response
        }catch(err){
            console.log(err)
            return {status: 500, messageClient: 'Erro ao buscar salas !', messageServer: err}
        }
        return
    }
}

export const agendamentoKnex = new AgendamentoKnex()