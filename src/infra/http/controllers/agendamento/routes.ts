import { FastifyInstance } from "fastify";
import { Agendamento } from "./agendamento";

export async function agendamentoRoutes(app: FastifyInstance) {
 
    const agendamento = new Agendamento()
    app.get('/agendamento/getAll', agendamento.getAgendamentos)
    app.post('/agendamento/create', agendamento.postAgendamento)
    app.put('/agendamento/update', agendamento.putAgendamento)
    app.get('/agendamento/procedimentos', agendamento.getProcedimentos)
    app.get('/agendamento/salas', agendamento.getSalas)
}   