import { config } from "dotenv";
import {z} from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    DATABASE_HOST: z.string(),
    DATABASE_PORT: z.coerce.number(),
    DATABASE_USER: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_NAME: z.string(),
})

export function loadEnvironmentVariables() {
    const testEnvironmentPath = '.env.test'
    const productionEnvironmentPath = '.env'
  
    process.env.NODE_ENV === 'test'
      ? config({ path: testEnvironmentPath })
      : config({ path: productionEnvironmentPath })
  
    const _env = envSchema.safeParse(process.env)
  
    if (_env.success === false) {
      console.error(_env.error)
      throw new Error('Invalid environment variables')
    }
  
    return _env.data
  }
  
  export const env = loadEnvironmentVariables()
  
  export type EnvironmentVariables = z.infer<typeof envSchema>