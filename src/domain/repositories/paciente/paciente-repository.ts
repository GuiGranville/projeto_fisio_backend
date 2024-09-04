import { FastifyReply, FastifyRequest } from "fastify";
import { PacienteBanco } from "../../models/paciente/paciente-models";
import { StatusReturn } from "../statusReturn/statusReturn";

export interface PacienteRepository {
    getPacientes(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco[]>
    getPacienteById(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    countPacientes(request: FastifyRequest, reply: FastifyReply): Promise<number>
    getPacienteByName(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    createPaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    updatePaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    deletePaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    updateEvolucaoPaciente(request: FastifyRequest, reply: FastifyReply): Promise<StatusReturn>
}

export interface PacienteKnexRepository{
    getPacientes(cdMultiEmpresa: number, qt_resultados?: number, page?: number): Promise<PacienteBanco[]>
    getPacienteById(): Promise<PacienteBanco>
    getPacienteByName(nmPaciente: string, cdMultiEmpresa: number): Promise<PacienteBanco[]>
    countPacientes(cdMultiEmpresa: number): Promise<number>
    createPaciente(data: PacienteBanco): Promise<void>
    updatePaciente(cdPpaciente: number, cdMultiEmpresa: number, data: PacienteBanco): Promise<PacienteBanco>
    deletePaciente(cdPaciente: number, cdMultiEmpresa: number): Promise<PacienteBanco>
    updateEvolucaoPaciente(cdPaciente: number, cd_atendimento: number, evolucao: string): Promise<StatusReturn>
}