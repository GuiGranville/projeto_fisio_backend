import { FastifyInstance } from "fastify";
import { autenticacaoController } from "./autenticacao";

export async function autenticacaoRoutes(app: FastifyInstance) {

    app.post('/autenticacao/login', autenticacaoController.login)
}    