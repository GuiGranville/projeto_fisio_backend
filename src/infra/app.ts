import fastifySwagger from "@fastify/swagger";
import { FastifyInstance, fastify } from "fastify";
import { env } from "./env/variable";
import cors from "@fastify/cors";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { healthCheckRoutes } from "./http/controllers/healthCheck/routes";
import { pacienteRoutes } from "./http/controllers/paciente/routes";
import { profissionalRoutes } from "./http/controllers/profissional/routes";

export const server: FastifyInstance = fastify();


server.register(cors, {
    origin: true,
});

server.register(fastifySwagger, {
    swagger:{
        info:{
            title: "Projeto Fisio",
            description: "Documentação da api do projeto",
            version: "1.0.0"
        },
        securityDefinitions:{
            apiKey:{
                type: "apiKey",
                name: "Authorization",
                in: "header"
            }
        },
        host: `localhost: ${env.PORT}`,
    }
})

server.register(fastifySwaggerUi,{
    routePrefix: "/docs",
    theme: {title: "Projeto Fisio"}
})

server.register(healthCheckRoutes)
server.register(pacienteRoutes)
server.register(profissionalRoutes)