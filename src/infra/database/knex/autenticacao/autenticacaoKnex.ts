import { ProfissionalBanco } from "../../../../domain/models/profissional/profissional-models";
import { StatusReturn } from "../../../../domain/repositories/statusReturn/statusReturn";
import knex from "../../database";


class Autenticacao {
 
    async getProfissional(email: string): Promise<StatusReturn> {
       try{
        const response = await knex.select('*').from('profissional').where({email: email, ativo: 1})

        return {status: 200, messageClient: 'Profissional encontrado', messageServer: response}
       }catch(err){
        
        return {status: 500, messageClient: 'Erro ao buscar profissionais !', messageServer: err}
       }
    }    
}

export const autenticacao = new Autenticacao()