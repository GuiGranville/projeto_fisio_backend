var d=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var R=(a,e)=>{for(var n in e)d(a,n,{get:e[n],enumerable:!0})},B=(a,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!S.call(a,r)&&r!==n&&d(a,r,{get:()=>e[r],enumerable:!(o=A(e,r))||o.enumerable});return a};var b=a=>B(d({},"__esModule",{value:!0}),a);var x={};R(x,{Agendamento:()=>g});module.exports=b(x);var t=require("zod");var u=require("knex"),w={client:"pg",connection:{host:process.env.DATABASE_HOST,port:Number(process.env.DATABASE_PORT),user:process.env.DATABASE_USER,password:process.env.DATABASE_PASSWORD,database:process.env.DATABASE_NAME}},P=(0,u.knex)(w),s=P;var p=class{async getAgendamentos(){let e=await s.raw(`
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
            `);return console.log(e.rows),e.rows}async postAgendamento(e){try{return console.log(e),await s("it_agenda_central").insert(e),{status:201,messageClient:"Agendamento criado com sucesso!"}}catch(n){return{status:500,messageClient:"Erro ao criar agendamento !",messageServer:n}}}async putAgendamento(e){}async getProcedimentos(){try{return await s.select("*").from("procedimento")}catch(e){return console.log(e),{status:500,messageClient:"Erro ao buscar procedimentos !",messageServer:e}}}async getSalas(){try{return await s.select("*").from("sala")}catch(e){return console.log(e),{status:500,messageClient:"Erro ao buscar salas !",messageServer:e}}}},i=new p;var l=class{async postAtendimento(e){try{console.log(e),await s("atendimento").insert(e);let n=await s("atendimento").select("cd_atendimento").where({cd_paciente:e.cd_paciente,cd_profissional:e.cd_profissional,cd_procedimento:e.cd_procedimento});return{status:201,messageClient:"Atendimento criado com sucesso!",messageServer:{cd_atendimento:n[n.length-1].cd_atendimento}}}catch(n){return{status:500,messageClient:"Erro ao criar atendimento !",messageServer:n}}}},_=new l;var v=t.z.object({data:t.z.object({cd_it_agenda_central:t.z.number().optional().nullable(),hr_inicio:t.z.string(),dt_inicio:t.z.string(),hr_fim:t.z.string(),cd_paciente:t.z.number(),cd_atendimento:t.z.number().optional().nullable(),cd_profissional:t.z.string(),cd_procedimento:t.z.string().nullable().optional(),cd_sala:t.z.string().nullable().optional(),situacao:t.z.string().nullable().optional(),lembrete_sms:t.z.string().nullable().optional(),lembrete_whatsapp:t.z.string().nullable().optional(),status:t.z.string().nullable().optional()})}),g=class{async getAgendamentos(e,n){let o=await i.getAgendamentos();return n.send(o).status(200)}async postAgendamento(e,n){let{data:o}=v.parse(e.body),r={cd_paciente:o.cd_paciente,cd_profissional:o.cd_profissional,evolucao:"",cd_procedimento:o.cd_procedimento,cd_convenio:1,situacao:"A"},m=await _.postAtendimento(r);console.log(m),o.cd_atendimento=m.messageServer.cd_atendimento;let c=await i.postAgendamento(o);if(console.log(c),c.status===201){let f=await i.getAgendamentos();return n.status(201).send(f)}return c.status===500?n.status(500).send(c):n.send(m)}async putAgendamento(e,n){}async getProcedimentos(e,n){let o=await i.getProcedimentos();return n.send(o).status(200)}async getSalas(e,n){let o=await i.getSalas();return n.send(o).status(200)}};0&&(module.exports={Agendamento});
