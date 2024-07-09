import { FastifyRequest, FastifyReply } from "fastify";
import { AgendamentoBanco } from "../../../../domain/models/agendamento/agendamento-models";
import { AgendamentoRepository } from "../../../../domain/repositories/agendamento/agendamento-repository";
import { z } from "zod";
import { agendamentoKnex } from "../../../database/knex/agendamento/agendamentoKnex";
import { atendimentoKnex } from "../../../database/knex/atendimento/atendimentoKnex";

const agendamentoSchema = z.object({
    data: z.object({
        cd_it_agenda_central: z.number().optional().nullable(),
        hr_inicio: z.string(),
        dt_inicio: z.string(),
        hr_fim: z.string(),
        dt_fim: z.string(),
        cd_paciente: z.number(),
        cd_atendimento: z.number().optional().nullable(),
        cd_profissional: z.number(),
        cd_procedimento: z.number()
    })
})
export class Agendamento implements AgendamentoRepository{
    async getAgendamentos(request: FastifyRequest, reply: FastifyReply): Promise<AgendamentoBanco[]> {
       const response = await agendamentoKnex.getAgendamentos()
        console.log(response)
        return reply.send(response).status(200)
    }

    async postAgendamento(request: FastifyRequest, reply: FastifyReply): Promise<AgendamentoBanco[]> {
        const { data } = agendamentoSchema.parse(request.body)
        const atendimentoData = {
            cd_paciente: data.cd_paciente,
            cd_profissional: data.cd_profissional,
            evolucao: '',
            cd_procedimento: data.cd_procedimento,
            situacao: 'A'
        }
        const responseAtendimento = await atendimentoKnex.postAtendimento(atendimentoData)
        console.log(responseAtendimento)
        data.cd_atendimento = responseAtendimento.messageServer.cd_atendimento
        const response = await agendamentoKnex.postAgendamento(data)
        if(response.status === 201){
            const responseAgendamentos = await agendamentoKnex.getAgendamentos()
            return reply.status(201).send(responseAgendamentos)
        }
        if(response.status === 500){
            return reply.status(500).send(response)
        }
        return reply.send(responseAtendimento)
    }

    async putAgendamento(request: FastifyRequest, reply: FastifyReply): Promise<AgendamentoBanco[]> {
        return
    }

}    