import { FastifyReply, FastifyRequest } from "fastify"
import { AgendamentoBanco } from "../../models/agendamento/agendamento-models"
import { StatusReturn } from "../statusReturn/statusReturn"

export interface AgendamentoRepository{
    getAgendamentos(request: FastifyRequest, reply: FastifyReply): Promise<AgendamentoBanco[]>
    postAgendamento(request: FastifyRequest, reply: FastifyReply): Promise<AgendamentoBanco[]>
    putAgendamento(request: FastifyRequest, reply: FastifyReply): Promise<AgendamentoBanco[]>
}

export interface AgendamentoKnexRepository{
    getAgendamentos(): Promise<AgendamentoBanco[]>
    postAgendamento(agendamento: AgendamentoBanco): Promise<StatusReturn>
    putAgendamento(agendamento: AgendamentoBanco): Promise<StatusReturn>
}