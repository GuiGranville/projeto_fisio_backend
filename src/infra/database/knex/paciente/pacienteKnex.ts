import { PacienteBanco } from "../../../../domain/models/paciente/paciente-models"
import { PacienteKnexRepository } from "../../../../domain/repositories/paciente/paciente-repository"
import knex from "../../database"

class PacienteKnex implements PacienteKnexRepository{

    async getPacientes(cdMultiEmpresa: number): Promise<PacienteBanco[]> {
        const response = await knex.select('*').from('paciente').where({cd_multi_empresa: cdMultiEmpresa})
        return response
    }

    async createPaciente(data: PacienteBanco): Promise<void> {
        console.log(data)
        await knex('paciente').insert(data)
       
    }

    async deletePaciente(cdPaciente: number, cdMultiEmpresa: number): Promise<PacienteBanco> {
        await knex('paciente').where({cd_paciente: cdPaciente, cd_multi_empresa: cdMultiEmpresa}).del()
        return
    }

    async getPaciente(): Promise<PacienteBanco> {
        return
    }

    async updatePaciente(cdPpaciente: number, cdMultiEmpresa: number, data: PacienteBanco): Promise<PacienteBanco> {

        await knex('paciente').where({cd_paciente: cdPpaciente, cd_multi_empresa: cdMultiEmpresa}).update(data)
        
        return 
    }
}

export const pacienteKnex = new PacienteKnex()