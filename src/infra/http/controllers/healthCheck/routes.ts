import { FastifyInstance } from "fastify";
import { healthCheckRouteSwaggerConfig } from "./health-check.swagger";
import { healthCheck } from "./healthCheck";

export async function healthCheckRoutes(app: FastifyInstance) {
    
    app.get('/health', {schema: healthCheckRouteSwaggerConfig}, healthCheck)
}