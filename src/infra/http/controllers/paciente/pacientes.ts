import { FastifyBaseLogger, FastifyReply, FastifyRequest, FastifySchema, FastifyTypeProviderDefault, RawServerDefault, RouteGenericInterface } from "fastify";
import { PacienteBanco } from "../../../../domain/models/paciente/paciente-models";
import { PacienteKnexRepository, PacienteRepository } from "../../../../domain/repositories/paciente/paciente-repository";
import { ResolveFastifyRequestType } from "fastify/types/type-provider";
import { IncomingMessage, ServerResponse } from "http";
import { pacienteKnex } from "../../../database/knex/paciente/pacienteKnex";
import { z } from "zod";


const pacienteSchema = z.object({
    data: z.object({
        nm_paciente: z.string(),
        cpf: z.string(),
        ds_sexo: z.string(),
        dt_nascimento: z.string(),
        email: z.string(),
        numero_telefone: z.string(),
        estado_civil: z.string(),
        nm_cidade: z.string(),
        cep: z.string(),
        nm_estado: z.string(),
        nm_pais: z.string(),
        cd_multi_empresa: z.number().nullable().optional(),
    })
})
export class Paciente implements PacienteRepository{

    async getPacientes(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco[]> {
        const { cd_multi_empresa }: any = request.query
        const response = await pacienteKnex.getPacientes(cd_multi_empresa)
        return reply.status(200).send(response)
    }

    async createPaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco> {
        const { data } = pacienteSchema.parse(request.body)
        console.log(data)
        await pacienteKnex.createPaciente(data)

        const responsePacientes = await pacienteKnex.getPacientes(data.cd_multi_empresa)
        return reply.status(201).send(responsePacientes)
    }

    async deletePaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco> {
        const { cd_paciente, cd_multi_empresa }: any = request.query
        await pacienteKnex.deletePaciente(cd_paciente, cd_multi_empresa)   

        const responsePacientes = await pacienteKnex.getPacientes(cd_multi_empresa)
        return reply.status(200).send(responsePacientes)
    }

    async getPacienteById(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco> {
        return
    }

    async getPacienteByName(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco> {
        return
    }

    async updatePaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco> {
        try{
            const {cd_paciente, cd_multi_empresa}: any = request.query
            const {data} = pacienteSchema.parse(request.body)

            let fieldsNotNull = new Object()

            for(const item in data){
                if(data[item] != null){
                    fieldsNotNull[item] = data[item]
                }
            }
            
            await pacienteKnex.updatePaciente(cd_paciente, cd_multi_empresa, fieldsNotNull)

            const responsePacientes = await pacienteKnex.getPacientes(cd_multi_empresa)

            return reply.status(200).send(responsePacientes)

        }catch(error){
            console.log(error)
            return reply.status(500).send({
                message: "Internal server error",
                messageError: error})
        }
    }

}