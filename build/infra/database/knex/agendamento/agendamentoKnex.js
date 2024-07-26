var s=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var l=(n,e)=>{for(var o in e)s(n,o,{get:e[o],enumerable:!0})},g=(n,e,o,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of d(e))!p.call(n,a)&&a!==o&&s(n,a,{get:()=>e[a],enumerable:!(c=m(e,a))||c.enumerable});return n};var _=n=>g(s({},"__esModule",{value:!0}),n);var S={};l(S,{agendamentoKnex:()=>f});module.exports=_(S);var i=require("knex"),u={client:"pg",connection:{host:process.env.DATABASE_HOST,port:Number(process.env.DATABASE_PORT),user:process.env.DATABASE_USER,password:process.env.DATABASE_PASSWORD,database:process.env.DATABASE_NAME}},A=(0,i.knex)(u),t=A;var r=class{async getAgendamentos(){let e=await t.raw(`
            select 
            agenda.cd_it_agenda_central,
            paciente.cd_paciente, 
            paciente.nm_paciente, 
            paciente.numero_telefone,
            profissional.cd_profissional,
            profissional.nm_profissional,
            agenda.dt_inicio, 
            agenda.hr_inicio,
            agenda.hr_fim,
			procedimento.nm_procedimento,
			sala.nm_sala,
			convenio.nm_convenio,
            agenda.status
            from it_agenda_central as agenda
            join paciente on paciente.cd_paciente = agenda.cd_paciente
            join profissional on profissional.cd_profissional = agenda.cd_profissional
			join procedimento on procedimento.cd_procedimento = agenda.cd_procedimento
			join atendimento on atendimento.cd_atendimento = agenda.cd_atendimento
			left join convenio on convenio.cd_convenio = atendimento.cd_convenio
			left join sala on sala.cd_sala = agenda.cd_sala
            `);return console.log(e.rows),e.rows}async postAgendamento(e){try{return console.log(e),await t("it_agenda_central").insert(e),{status:201,messageClient:"Agendamento criado com sucesso!"}}catch(o){return{status:500,messageClient:"Erro ao criar agendamento !",messageServer:o}}}async putAgendamento(e){}async getProcedimentos(){try{return await t.select("*").from("procedimento")}catch(e){return console.log(e),{status:500,messageClient:"Erro ao buscar procedimentos !",messageServer:e}}}async getSalas(){try{return await t.select("*").from("sala")}catch(e){return console.log(e),{status:500,messageClient:"Erro ao buscar salas !",messageServer:e}}}},f=new r;0&&(module.exports={agendamentoKnex});
