import { AtendimentoBanco } from "../../models/atendimento/atendimento-models";
import { StatusReturn } from "../statusReturn/statusReturn";


export interface AtendimentoKnexRepository {
    postAtendimento(data: AtendimentoBanco): Promise<StatusReturn>
    
}    
