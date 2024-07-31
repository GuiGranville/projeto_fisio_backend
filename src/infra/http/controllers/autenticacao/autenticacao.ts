import { FastifyReply, FastifyRequest } from "fastify";
import { StatusReturn } from "../../../../domain/repositories/statusReturn/statusReturn";
import { autenticacao } from "../../../database/knex/autenticacao/autenticacaoKnex";
import brcypt from "bcrypt"
import jwt from "jsonwebtoken"


class AutenticacaoController{


    async login(request: FastifyRequest, reply: FastifyReply): Promise<StatusReturn>{
        const { email, password }: any = request.body
        console.log(email, password)
        const responseFuncionario = await autenticacao.getProfissional(email)
        console.log(responseFuncionario)
        if(responseFuncionario.status === 500){

            return reply.status(500).send({message: "Internal server error"})
        }
        if(responseFuncionario.messageServer.length === 0){
            return reply.status(404).send({message: "User not found"})
        }

        console.log(responseFuncionario.messageServer[0].senha)
        const validacao = await brcypt.compare(password, responseFuncionario.messageServer[0].senha)

        console.log(validacao)
        if(validacao){
            const token = jwt.sign(
                {email: responseFuncionario.messageServer[0].email, name: responseFuncionario.messageServer[0].nm_profissional, permissions: ['admin']},
                 "secret", {expiresIn: "1d"})
            console.log(token)
            return reply.status(200).send({message: 'Login Realizado com sucesso', token: token, userInformation: responseFuncionario.messageServer[0]})
        }
        
        return reply.status(401).send({message: 'Sem login pra você amigo !'})
    }   
    
    
}

export const autenticacaoController = new AutenticacaoController()