import { FastifyReply, FastifyRequest } from "fastify";
import { PacienteBanco } from "../../models/paciente/paciente-models";

export interface PacienteRepository {
    getPacientes(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco[]>
    getPacienteById(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    countPacientes(request: FastifyRequest, reply: FastifyReply): Promise<number>
    getPacienteByName(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    createPaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    updatePaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    deletePaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
}

export interface PacienteKnexRepository{
    getPacientes(cdMultiEmpresa: number, qt_resultados?: number, page?: number): Promise<PacienteBanco[]>
    getPaciente(): Promise<PacienteBanco>
    countPacientes(cdMultiEmpresa: number): Promise<number>
    createPaciente(data: PacienteBanco): Promise<void>
    updatePaciente(cdPpaciente: number, cdMultiEmpresa: number, data: PacienteBanco): Promise<PacienteBanco>
    deletePaciente(cdPaciente: number, cdMultiEmpresa: number): Promise<PacienteBanco>
}