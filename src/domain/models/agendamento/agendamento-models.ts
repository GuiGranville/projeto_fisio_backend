
export interface AgendamentoBanco {
    cd_it_agenda_central?: number
    hr_inicio?: string
    dt_inicio?: string
    hr_fim?: string
    dt_fim?: string
    cd_paciente?: number
    cd_atendimento?: number
    cd_profissional?: string
    cd_procedimento?: string
    numero_telefone?: string
    procedimento?: string
    cd_sala?: string
    nm_sala?: string
    lembrete_sms?: string
    lembrete_whatsapp?: string
    status?: string
}


export interface ProcedimentoBanco{
    cd_procedimento?: number
    nm_procedimento?: string
}

export interface SalaBanco{
    cd_sala?: number
    nm_sala?: string
}