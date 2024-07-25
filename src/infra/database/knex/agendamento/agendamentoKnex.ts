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
            paciente.numero_telefone,
            profissional.cd_profissional,
            profissional.nm_profissional,
            agenda.dt_inicio, 
            agenda.hr_inicio,
            agenda.hr_fim,
			procedimento.nm_procedimento,
			sala.nm_sala,
			convenio.nm_convenio,
            agenda.status
            from it_agenda_central as agenda
            join paciente on paciente.cd_paciente = agenda.cd_paciente
            join profissional on profissional.cd_profissional = agenda.cd_profissional
			join procedimento on procedimento.cd_procedimento = agenda.cd_procedimento
			join atendimento on atendimento.cd_atendimento = agenda.cd_atendimento
			left join convenio on convenio.cd_convenio = atendimento.cd_convenio
			left join sala on sala.cd_sala = agenda.cd_sala
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