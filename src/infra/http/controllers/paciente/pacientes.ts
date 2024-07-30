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
        ds_sexo: z.string().nullable().optional(),
        dt_nascimento: z.string(),
        email: z.string().nullable().optional(),
        numero_telefone: z.string(),
        estado_civil: z.string().nullable().optional(),
        nm_cidade: z.string().nullable().optional(),
        cep: z.string().nullable().optional(),
        nm_estado: z.string().nullable().optional(),
        nm_pais: z.string().nullable().optional(),
        cd_multi_empresa: z.number().nullable().optional(),
        rg: z.string().nullable().optional(),
        profissao: z.string().nullable().optional(),
        empresa: z.string().nullable().optional(),
        telefone_fixo: z.string().nullable().optional(),
        preferencia_contato: z.string().nullable().optional(),
        breve_diagnostico: z.string().nullable().optional(),
        nm_bairro: z.string().nullable().optional(),
        logradouro: z.string().nullable().optional(),
        numero_casa: z.string().nullable().optional(),
        complemento: z.string().nullable().optional(),
        cd_convenio: z.number().nullable().optional(),
        numero_convenio: z.string().nullable().optional(),
        validade_carteira: z.string().nullable().optional(),
        numero_cns: z.string().nullable().optional(),
    })
})
export class Paciente implements PacienteRepository{

    async getPacientes(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco[]> {
        const { cd_multi_empresa, qt_resultados, page }: any = request.query
        const response = await pacienteKnex.getPacientes(cd_multi_empresa, qt_resultados, page)
        return reply.status(200).send(response)
    }

    async createPaciente(request: FastifyRequest, reply: FastifyReply): Promise<PacienteBanco> {
        console.log(request.body)
        const { data } = pacienteSchema.parse(request.body)
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
        const { nm_paciente, cd_multi_empresa }: any = request.query
        const response = await pacienteKnex.getPacienteByName(nm_paciente, cd_multi_empresa)

        return reply.status(200).send(response)
    }

    async countPacientes(request: FastifyRequest, reply: FastifyReply): Promise<number> {
        const { cd_multi_empresa }: any = request.query
        const response = await pacienteKnex.countPacientes(cd_multi_empresa)
        return reply.status(200).send(response)
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