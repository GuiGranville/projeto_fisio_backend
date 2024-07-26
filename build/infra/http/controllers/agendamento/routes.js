var l=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var R=(t,e)=>{for(var n in e)l(t,n,{get:e[n],enumerable:!0})},B=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!S.call(t,r)&&r!==n&&l(t,r,{get:()=>e[r],enumerable:!(a=A(e,r))||a.enumerable});return t};var b=t=>B(l({},"__esModule",{value:!0}),t);var F={};R(F,{agendamentoRoutes:()=>x});module.exports=b(F);var o=require("zod");var u=require("knex"),w={client:"pg",connection:{host:process.env.DATABASE_HOST,port:Number(process.env.DATABASE_PORT),user:process.env.DATABASE_USER,password:process.env.DATABASE_PASSWORD,database:process.env.DATABASE_NAME}},P=(0,u.knex)(w),s=P;var p=class{async getAgendamentos(){let e=await s.raw(`
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
            `);return console.log(e.rows),e.rows}async postAgendamento(e){try{return console.log(e),await s("it_agenda_central").insert(e),{status:201,messageClient:"Agendamento criado com sucesso!"}}catch(n){return{status:500,messageClient:"Erro ao criar agendamento !",messageServer:n}}}async putAgendamento(e){}async getProcedimentos(){try{return await s.select("*").from("procedimento")}catch(e){return console.log(e),{status:500,messageClient:"Erro ao buscar procedimentos !",messageServer:e}}}async getSalas(){try{return await s.select("*").from("sala")}catch(e){return console.log(e),{status:500,messageClient:"Erro ao buscar salas !",messageServer:e}}}},i=new p;var g=class{async postAtendimento(e){try{console.log(e),await s("atendimento").insert(e);let n=await s("atendimento").select("cd_atendimento").where({cd_paciente:e.cd_paciente,cd_profissional:e.cd_profissional,cd_procedimento:e.cd_procedimento});return{status:201,messageClient:"Atendimento criado com sucesso!",messageServer:{cd_atendimento:n[n.length-1].cd_atendimento}}}catch(n){return{status:500,messageClient:"Erro ao criar atendimento !",messageServer:n}}}},_=new g;var v=o.z.object({data:o.z.object({cd_it_agenda_central:o.z.number().optional().nullable(),hr_inicio:o.z.string(),dt_inicio:o.z.string(),hr_fim:o.z.string(),cd_paciente:o.z.number(),cd_atendimento:o.z.number().optional().nullable(),cd_profissional:o.z.string(),cd_procedimento:o.z.string().nullable().optional(),cd_sala:o.z.string().nullable().optional(),situacao:o.z.string().nullable().optional(),lembrete_sms:o.z.string().nullable().optional(),lembrete_whatsapp:o.z.string().nullable().optional(),status:o.z.string().nullable().optional()})}),m=class{async getAgendamentos(e,n){let a=await i.getAgendamentos();return n.send(a).status(200)}async postAgendamento(e,n){let{data:a}=v.parse(e.body),r={cd_paciente:a.cd_paciente,cd_profissional:a.cd_profissional,evolucao:"",cd_procedimento:a.cd_procedimento,cd_convenio:1,situacao:"A"},d=await _.postAtendimento(r);console.log(d),a.cd_atendimento=d.messageServer.cd_atendimento;let c=await i.postAgendamento(a);if(console.log(c),c.status===201){let f=await i.getAgendamentos();return n.status(201).send(f)}return c.status===500?n.status(500).send(c):n.send(d)}async putAgendamento(e,n){}async getProcedimentos(e,n){let a=await i.getProcedimentos();return n.send(a).status(200)}async getSalas(e,n){let a=await i.getSalas();return n.send(a).status(200)}};async function x(t){let e=new m;t.get("/agendamento/getAll",e.getAgendamentos),t.post("/agendamento/create",e.postAgendamento),t.put("/agendamento/update",e.putAgendamento),t.get("/agendamento/procedimentos",e.getProcedimentos),t.get("/agendamento/salas",e.getSalas)}0&&(module.exports={agendamentoRoutes});
