import { FastifyReply, FastifyRequest } from "fastify"
import { AgendamentoBanco, ProcedimentoBanco, SalaBanco } from "../../models/agendamento/agendamento-models"
import { StatusReturn } from "../statusReturn/statusReturn"

export interface AgendamentoRepository{
    getAgendamentos(request: FastifyRequest, reply: FastifyReply): Promise<AgendamentoBanco[]>
    postAgendamento(request: FastifyRequest, reply: FastifyReply): Promise<AgendamentoBanco[]>
    putAgendamento(request: FastifyRequest, reply: FastifyReply): Promise<AgendamentoBanco[]>
    getProcedimentos(request: FastifyRequest, reply: FastifyReply): Promise<ProcedimentoBanco[]>
    getSalas(request: FastifyRequest, reply: FastifyReply): Promise<SalaBanco[]>
}

export interface AgendamentoKnexRepository{
    getAgendamentos(): Promise<AgendamentoBanco[]>
    postAgendamento(agendamento: AgendamentoBanco): Promise<StatusReturn>
    putAgendamento(agendamento: AgendamentoBanco): Promise<StatusReturn>
    getProcedimentos(): Promise<ProcedimentoBanco[] | StatusReturn>
    getSalas(): Promise<SalaBanco[] | StatusReturn>
}