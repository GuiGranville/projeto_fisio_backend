import { FastifyReply, FastifyRequest } from "fastify";
import { ProfissionalRepository } from "../../../../domain/repositories/profissional/profissional-repository";
import { ProfissionalBanco } from "../../../../domain/models/profissional/profissional-models";
import { profissionalKnex } from "../../../database/knex/profissional/profissionalKnex";
import { z } from "zod";
import bcrypt from "bcrypt"

const profissionalSchema = z.object({
    data: z.object({
        cd_profissional: z.number().optional().nullable(),
        nm_profissional: z.string(),
        email: z.string().optional().nullable(),
        numero_telefone: z.string(),
        senha: z.string(),
        privilegio: z.string(),
        registro: z.string(),
        cd_tipo_profissional: z.number().optional().nullable(),
        ativo: z.string().optional().nullable()
    })
})

export class Profissional implements ProfissionalRepository {

    async getProfissionais(request: FastifyRequest, reply: FastifyReply): Promise<ProfissionalBanco[]> {
       try{
        const response = await profissionalKnex.getProfissionais()
        return reply.status(200).send(response)
       }catch(error){
            console.log(error)
            return reply.status(500).send({
                message: "Internal server error",
                messageError: error
            })
       }
        
    }

    async postProfissional(request: FastifyRequest, reply: FastifyReply): Promise<ProfissionalBanco[]> {
        console.log(request.body);
        let { data } = profissionalSchema.parse(request.body);
    
        // Gerar o hash da senha de forma assíncrona
        try {
            data.senha = await bcrypt.hash(data.senha, 10);
            data.ativo = "1";
    
            const response = await profissionalKnex.postProfissional(data);
            console.log(response);
    
            if (response.status === 201) {
                const responseProfissionais = await profissionalKnex.getProfissionais();
                return reply.status(201).send(responseProfissionais);
            }
            if (response.status === 500) {
                return reply.status(500).send(response);
            }
        } catch (error) {
            console.error("Erro ao inserir profissional:", error);
            return reply.status(500).send({ error: "Erro ao inserir profissional" });
        }
    }

    async putProfissional(request: FastifyRequest, reply: FastifyReply): Promise<ProfissionalBanco[]> {
        
        const {cd_profissional}: any = request.query
        const {data} = profissionalSchema.parse(request.body)

        let fieldsNotNull: ProfissionalBanco = new Object()
        for(const item in data){
            if(data[item] != null){
                fieldsNotNull[item] = data[item]
            }
        }
        const response = await profissionalKnex.putProfissional(fieldsNotNull, cd_profissional)
        if(response.status === 200){
            const responseProfissionais = await profissionalKnex.getProfissionais()
            return reply.status(200).send(responseProfissionais)
        }
        if(response.status === 500){
            return reply.status(500).send(response)
        }
    }
}