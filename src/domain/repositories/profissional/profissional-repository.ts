import { FastifyReply, FastifyRequest } from "fastify";
import { ProfissionalBanco } from "../../models/profissional/profissional-models";
import { StatusReturn } from "../statusReturn/statusReturn";


export interface ProfissionalRepository{
    getProfissionais(request: FastifyRequest, reply: FastifyReply): Promise<ProfissionalBanco[]>
    postProfissional(request: FastifyRequest, reply: FastifyReply): Promise<ProfissionalBanco[]>
    putProfissional(request: FastifyRequest, reply: FastifyReply): Promise<ProfissionalBanco[]>
}

export interface ProfissionalKnexRepository{
    getProfissionais(): Promise<ProfissionalBanco[] | StatusReturn>
    postProfissional(data: ProfissionalBanco): Promise<StatusReturn>
    putProfissional(data: ProfissionalBanco, cd_profissional: number): Promise<StatusReturn>
}