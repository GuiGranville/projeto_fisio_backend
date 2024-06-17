import { knex as setupKnex } from "knex"

const databaseConfig = { 
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    }
}
const knex = setupKnex(databaseConfig)

export default knex