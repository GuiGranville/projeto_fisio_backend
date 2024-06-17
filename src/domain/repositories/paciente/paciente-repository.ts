import { FastifyReply, FastifyRequest } from "fastify";
import { PacienteBanco } from "../../models/paciente/paciente-models";

export interface PacienteRepository {
    getPacientes(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco[]>
    getPacienteById(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    getPacienteByName(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    createPaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    updatePaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
    deletePaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco>
}

export interface PacienteKnexRepository{
    getPacientes(cdMultiEmpresa: number): Promise<PacienteBanco[]>
    getPaciente(): Promise<PacienteBanco>
    createPaciente(data: PacienteBanco): Promise<void>
    updatePaciente(cdPpaciente: number, cdMultiEmpresa: number, data: PacienteBanco): Promise<PacienteBanco>
    deletePaciente(cdPaciente: number, cdMultiEmpresa: number): Promise<PacienteBanco>
}