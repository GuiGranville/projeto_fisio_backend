import { FastifyInstance } from "fastify";
import { Profissional } from "./profissional";
import { profissionalGetAllRouteSwaggerConfig, profissionalCreateRouteSwaggerConfig } from "./profissional.swagger";


export async function profissionalRoutes(app: FastifyInstance){
    const profissional = new Profissional()
    app.get("/profissional/getAll", {schema: profissionalGetAllRouteSwaggerConfig}, profissional.getProfissionais)
    app.post("/profissional/create", {schema: profissionalCreateRouteSwaggerConfig}, profissional.postProfissional)
    app.put("/profissional/update", {schema: profissionalCreateRouteSwaggerConfig}, profissional.putProfissional)
}