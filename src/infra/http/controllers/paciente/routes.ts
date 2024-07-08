import { FastifyInstance } from "fastify";
import { pacienteCountRouteSwaggerConfig, pacienteCreateRouteSwaggerConfig, pacienteGetAllRouteSwaggerConfig } from "./paciente.swagger";
import { Paciente } from "./pacientes";


export async function pacienteRoutes(app: FastifyInstance) {
    const paciente = new Paciente()
    app.get("/paciente/getAll", {schema: pacienteGetAllRouteSwaggerConfig}, paciente.getPacientes)
    app.get("/paciente/getById", {schema: pacienteGetAllRouteSwaggerConfig}, paciente.getPacienteById)
    app.get("/paciente/getByName", {schema: pacienteGetAllRouteSwaggerConfig}, paciente.getPacienteByName)
    app.get("/paciente/count", {schema: pacienteCountRouteSwaggerConfig}, paciente.countPacientes)
    app.post("/paciente/create", {schema: pacienteCreateRouteSwaggerConfig}, paciente.createPaciente)
    app.delete("/paciente/delete", {schema: pacienteCreateRouteSwaggerConfig}, paciente.deletePaciente)
    app.put("/paciente/update", {schema: pacienteCreateRouteSwaggerConfig}, paciente.updatePaciente)
}
