var be=Object.create;var A=Object.defineProperty;var he=Object.getOwnPropertyDescriptor;var _e=Object.getOwnPropertyNames;var Re=Object.getPrototypeOf,ve=Object.prototype.hasOwnProperty;var $=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Pe=(t,e)=>{for(var n in e)A(t,n,{get:e[n],enumerable:!0})},L=(t,e,n,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of _e(e))!ve.call(t,r)&&r!==n&&A(t,r,{get:()=>e[r],enumerable:!(s=he(e,r))||s.enumerable});return t};var h=(t,e,n)=>(n=t!=null?be(Re(t)):{},L(e||!t||!t.__esModule?A(n,"default",{value:t,enumerable:!0}):n,t)),Ae=t=>L(A({},"__esModule",{value:!0}),t);var Y=$((ze,we)=>{we.exports={name:"dotenv",version:"16.4.5",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},funding:"https://dotenvx.com",keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3",decache:"^4.6.1",sinon:"^14.0.1",standard:"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0",tap:"^16.3.0",tar:"^6.1.11",typescript:"^4.8.4"},engines:{node:">=12"},browser:{fs:!1}}});var G=$((Ge,f)=>{var x=require("fs"),D=require("path"),Ee=require("os"),Se=require("crypto"),Te=Y(),N=Te.version,Fe=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function Be(t){let e={},n=t.toString();n=n.replace(/\r\n?/mg,`
`);let s;for(;(s=Fe.exec(n))!=null;){let r=s[1],o=s[2]||"";o=o.trim();let a=o[0];o=o.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),a==='"'&&(o=o.replace(/\\n/g,`
`),o=o.replace(/\\r/g,"\r")),e[r]=o}return e}function xe(t){let e=z(t),n=m.configDotenv({path:e});if(!n.parsed){let a=new Error(`MISSING_DATA: Cannot parse ${e} for an unknown reason`);throw a.code="MISSING_DATA",a}let s=M(t).split(","),r=s.length,o;for(let a=0;a<r;a++)try{let i=s[a].trim(),l=Ie(n,i);o=m.decrypt(l.ciphertext,l.key);break}catch(i){if(a+1>=r)throw i}return m.parse(o)}function De(t){console.log(`[dotenv@${N}][INFO] ${t}`)}function Ne(t){console.log(`[dotenv@${N}][WARN] ${t}`)}function w(t){console.log(`[dotenv@${N}][DEBUG] ${t}`)}function M(t){return t&&t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function Ie(t,e){let n;try{n=new URL(e)}catch(i){if(i.code==="ERR_INVALID_URL"){let l=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw l.code="INVALID_DOTENV_KEY",l}throw i}let s=n.password;if(!s){let i=new Error("INVALID_DOTENV_KEY: Missing key part");throw i.code="INVALID_DOTENV_KEY",i}let r=n.searchParams.get("environment");if(!r){let i=new Error("INVALID_DOTENV_KEY: Missing environment part");throw i.code="INVALID_DOTENV_KEY",i}let o=`DOTENV_VAULT_${r.toUpperCase()}`,a=t.parsed[o];if(!a){let i=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);throw i.code="NOT_FOUND_DOTENV_ENVIRONMENT",i}return{ciphertext:a,key:s}}function z(t){let e=null;if(t&&t.path&&t.path.length>0)if(Array.isArray(t.path))for(let n of t.path)x.existsSync(n)&&(e=n.endsWith(".vault")?n:`${n}.vault`);else e=t.path.endsWith(".vault")?t.path:`${t.path}.vault`;else e=D.resolve(process.cwd(),".env.vault");return x.existsSync(e)?e:null}function U(t){return t[0]==="~"?D.join(Ee.homedir(),t.slice(1)):t}function qe(t){De("Loading env from encrypted .env.vault");let e=m._parseVault(t),n=process.env;return t&&t.processEnv!=null&&(n=t.processEnv),m.populate(n,e,t),{parsed:e}}function je(t){let e=D.resolve(process.cwd(),".env"),n="utf8",s=!!(t&&t.debug);t&&t.encoding?n=t.encoding:s&&w("No encoding is specified. UTF-8 is used by default");let r=[e];if(t&&t.path)if(!Array.isArray(t.path))r=[U(t.path)];else{r=[];for(let l of t.path)r.push(U(l))}let o,a={};for(let l of r)try{let _=m.parse(x.readFileSync(l,{encoding:n}));m.populate(a,_,t)}catch(_){s&&w(`Failed to load ${l} ${_.message}`),o=_}let i=process.env;return t&&t.processEnv!=null&&(i=t.processEnv),m.populate(i,a,t),o?{parsed:a,error:o}:{parsed:a}}function Ce(t){if(M(t).length===0)return m.configDotenv(t);let e=z(t);return e?m._configVault(t):(Ne(`You set DOTENV_KEY but you are missing a .env.vault file at ${e}. Did you forget to build it?`),m.configDotenv(t))}function Oe(t,e){let n=Buffer.from(e.slice(-64),"hex"),s=Buffer.from(t,"base64"),r=s.subarray(0,12),o=s.subarray(-16);s=s.subarray(12,-16);try{let a=Se.createDecipheriv("aes-256-gcm",n,r);return a.setAuthTag(o),`${a.update(s)}${a.final()}`}catch(a){let i=a instanceof RangeError,l=a.message==="Invalid key length",_=a.message==="Unsupported state or unable to authenticate data";if(i||l){let P=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw P.code="INVALID_DOTENV_KEY",P}else if(_){let P=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw P.code="DECRYPTION_FAILED",P}else throw a}}function Ve(t,e,n={}){let s=!!(n&&n.debug),r=!!(n&&n.override);if(typeof e!="object"){let o=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw o.code="OBJECT_REQUIRED",o}for(let o of Object.keys(e))Object.prototype.hasOwnProperty.call(t,o)?(r===!0&&(t[o]=e[o]),s&&w(r===!0?`"${o}" is already defined and WAS overwritten`:`"${o}" is already defined and was NOT overwritten`)):t[o]=e[o]}var m={configDotenv:je,_configVault:qe,_parseVault:xe,config:Ce,decrypt:Oe,parse:Be,populate:Ve};f.exports.configDotenv=m.configDotenv;f.exports._configVault=m._configVault;f.exports._parseVault=m._parseVault;f.exports.config=m.config;f.exports.decrypt=m.decrypt;f.exports.parse=m.parse;f.exports.populate=m.populate;f.exports=m});var Ue={};Pe(Ue,{server:()=>y});module.exports=Ae(Ue);var de=h(require("@fastify/swagger")),ge=require("fastify");var I=h(G()),b=require("zod"),ke=b.z.object({PORT:b.z.coerce.number().default(3333),DATABASE_HOST:b.z.string(),DATABASE_PORT:b.z.coerce.number(),DATABASE_USER:b.z.string(),DATABASE_PASSWORD:b.z.string(),DATABASE_NAME:b.z.string()});function Ke(){process.env.NODE_ENV==="test"?(0,I.config)({path:".env.test"}):(0,I.config)({path:".env"});let n=ke.safeParse(process.env);if(n.success===!1)throw console.error(n.error),new Error("Invalid environment variables");return n.data}var W=Ke();var fe=h(require("@fastify/cors")),ye=h(require("@fastify/swagger-ui"));var H={description:"Route to application health, returns some data about the situation.",tags:["Health Check"],response:{200:{description:"Successful response!",type:"object",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"string",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}};async function J(t,e){return e.status(200).send({message:"Application is up and running!"})}async function Q(t){t.get("/health",{schema:H},J)}var E={description:"Route to get all paciente, returns some data about the situation.",tags:["Paciente"],response:{200:{description:"Successful response!",type:"array",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}},X={description:"Route to get all paciente, returns some data about the situation.",tags:["Paciente"],response:{200:{description:"Successful response!",type:"number",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}},S={description:"Route to register a paciente.",tags:["Paciente"],response:{201:{description:"Successful response!",type:"array",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}};var Z=require("knex"),$e={client:"pg",connection:{host:process.env.DATABASE_HOST,port:Number(process.env.DATABASE_PORT),user:process.env.DATABASE_USER,password:process.env.DATABASE_PASSWORD,database:process.env.DATABASE_NAME}},Le=(0,Z.knex)($e),p=Le;var q=class{async getPacientes(e,n,s){return await p.select("*").from("paciente").where({cd_multi_empresa:e,ativo:1}).limit(n).offset((s-1)*n)}async createPaciente(e){console.log(e),await p("paciente").insert({data:e,ativo:1})}async deletePaciente(e,n){await p("paciente").where({cd_paciente:e,cd_multi_empresa:n}).del()}async countPacientes(e){let n=await p("paciente").where({cd_multi_empresa:e,ativo:1}).count();return Number(n[0].count)}async getPacienteById(){}async getPacienteByName(e,n){console.log(e);let s=await p.select("*").from("paciente").where({cd_multi_empresa:n,ativo:1}).andWhere("nm_paciente","ILIKE",`%${e}%`);return console.log(s),s}async updatePaciente(e,n,s){await p("paciente").where({cd_paciente:e,cd_multi_empresa:n}).update(s)}},g=new q;var c=require("zod"),ee=c.z.object({data:c.z.object({nm_paciente:c.z.string(),cpf:c.z.string(),ds_sexo:c.z.string().nullable().optional(),dt_nascimento:c.z.string(),email:c.z.string().nullable().optional(),numero_telefone:c.z.string(),estado_civil:c.z.string().nullable().optional(),nm_cidade:c.z.string().nullable().optional(),cep:c.z.string().nullable().optional(),nm_estado:c.z.string().nullable().optional(),nm_pais:c.z.string().nullable().optional(),cd_multi_empresa:c.z.number().nullable().optional(),rg:c.z.string().nullable().optional(),profissao:c.z.string().nullable().optional(),empresa:c.z.string().nullable().optional(),telefone_fixo:c.z.string().nullable().optional(),preferencia_contato:c.z.string(),breve_diagnostico:c.z.string().nullable().optional(),nm_bairro:c.z.string().nullable().optional(),logradouro:c.z.string().nullable().optional(),numero_casa:c.z.string().nullable().optional(),complemento:c.z.string().nullable().optional(),cd_convenio:c.z.number().nullable().optional(),numero_convenio:c.z.string().nullable().optional(),validade_carteira:c.z.string().nullable().optional(),numero_cns:c.z.string().nullable().optional()})}),T=class{async getPacientes(e,n){let{cd_multi_empresa:s,qt_resultados:r,page:o}=e.query,a=await g.getPacientes(s,r,o);return n.status(200).send(a)}async createPaciente(e,n){console.log(e.body);let{data:s}=ee.parse(e.body);await g.createPaciente(s);let r=await g.getPacientes(s.cd_multi_empresa);return n.status(201).send(r)}async deletePaciente(e,n){let{cd_paciente:s,cd_multi_empresa:r}=e.query;await g.deletePaciente(s,r);let o=await g.getPacientes(r);return n.status(200).send(o)}async getPacienteById(e,n){}async getPacienteByName(e,n){let{nm_paciente:s,cd_multi_empresa:r}=e.query,o=await g.getPacienteByName(s,r);return n.status(200).send(o)}async countPacientes(e,n){let{cd_multi_empresa:s}=e.query,r=await g.countPacientes(s);return n.status(200).send(r)}async updatePaciente(e,n){try{let{cd_paciente:s,cd_multi_empresa:r}=e.query,{data:o}=ee.parse(e.body),a=new Object;for(let l in o)o[l]!=null&&(a[l]=o[l]);await g.updatePaciente(s,r,a);let i=await g.getPacientes(r);return n.status(200).send(i)}catch(s){return console.log(s),n.status(500).send({message:"Internal server error",messageError:s})}}};async function te(t){let e=new T;t.get("/paciente/getAll",{schema:E},e.getPacientes),t.get("/paciente/getById",{schema:E},e.getPacienteById),t.get("/paciente/getByName",{schema:E},e.getPacienteByName),t.get("/paciente/count",{schema:X},e.countPacientes),t.post("/paciente/create",{schema:S},e.createPaciente),t.delete("/paciente/delete",{schema:S},e.deletePaciente),t.put("/paciente/update",{schema:S},e.updatePaciente)}var j=class{async getProfissionais(){try{return await p.select("*").from("profissional").where({ativo:1})}catch(e){return{status:500,messageClient:"Erro ao buscar profissionais !",messageServer:e}}}async postProfissional(e){try{return await p("profissional").insert(e),{status:201,messageClient:"Profissional criado com sucesso!"}}catch(n){return{status:500,messageClient:"Erro ao criar profissional !",messageServer:n}}}async putProfissional(e,n){try{return await p("profissional").where({cd_profissional:n}).update(e),{status:200,messageClient:"Profissional atualizado com sucesso!"}}catch(s){return{status:500,messageClient:"Erro ao atualizar profissional !",messageServer:s}}}},R=new j;var d=require("zod"),se=h(require("bcrypt")),ne=d.z.object({data:d.z.object({cd_profissional:d.z.number().optional().nullable(),nm_profissional:d.z.string(),email:d.z.string().optional().nullable(),numero_telefone:d.z.string(),senha:d.z.string(),privilegio:d.z.string(),registro:d.z.string(),cd_tipo_profissional:d.z.number().optional().nullable(),ativo:d.z.string().optional().nullable()})}),F=class{async getProfissionais(e,n){try{let s=await R.getProfissionais();return n.status(200).send(s)}catch(s){return console.log(s),n.status(500).send({message:"Internal server error",messageError:s})}}async postProfissional(e,n){console.log(e.body);let{data:s}=ne.parse(e.body);se.default.hash(s.senha,10,(r,o)=>{s.senha=o}),s.ativo="1";try{let r=await R.postProfissional(s);if(console.log(r),r.status===201){let o=await R.getProfissionais();return n.status(201).send(o)}if(r.status===500)return n.status(500).send(r)}catch{return}}async putProfissional(e,n){let{cd_profissional:s}=e.query,{data:r}=ne.parse(e.body),o=new Object;for(let i in r)r[i]!=null&&(o[i]=r[i]);let a=await R.putProfissional(o,s);if(a.status===200){let i=await R.getProfissionais();return n.status(200).send(i)}if(a.status===500)return n.status(500).send(a)}};var oe={description:"Route to get all profissional, returns some data about the situation.",tags:["Profissional"],response:{200:{description:"Successful response!",type:"array",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}},C={description:"Route to create a profissional, returns some data about the situation.",tags:["Profissional"],response:{201:{description:"Successful response!",type:"array",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}};async function re(t){let e=new F;t.get("/profissional/getAll",{schema:oe},e.getProfissionais),t.post("/profissional/create",{schema:C},e.postProfissional),t.put("/profissional/update",{schema:C},e.putProfissional)}var u=require("zod");var O=class{async getAgendamentos(){let e=await p.raw(`
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
            `);return console.log(e.rows),e.rows}async postAgendamento(e){try{return console.log(e),await p("it_agenda_central").insert(e),{status:201,messageClient:"Agendamento criado com sucesso!"}}catch(n){return{status:500,messageClient:"Erro ao criar agendamento !",messageServer:n}}}async putAgendamento(e){}async getProcedimentos(){try{return await p.select("*").from("procedimento")}catch(e){return console.log(e),{status:500,messageClient:"Erro ao buscar procedimentos !",messageServer:e}}}async getSalas(){try{return await p.select("*").from("sala")}catch(e){return console.log(e),{status:500,messageClient:"Erro ao buscar salas !",messageServer:e}}}},v=new O;var V=class{async postAtendimento(e){try{console.log(e),await p("atendimento").insert(e);let n=await p("atendimento").select("cd_atendimento").where({cd_paciente:e.cd_paciente,cd_profissional:e.cd_profissional,cd_procedimento:e.cd_procedimento});return{status:201,messageClient:"Atendimento criado com sucesso!",messageServer:{cd_atendimento:n[n.length-1].cd_atendimento}}}catch(n){return{status:500,messageClient:"Erro ao criar atendimento !",messageServer:n}}}},ae=new V;var Ye=u.z.object({data:u.z.object({cd_it_agenda_central:u.z.number().optional().nullable(),hr_inicio:u.z.string(),dt_inicio:u.z.string(),hr_fim:u.z.string(),cd_paciente:u.z.number(),cd_atendimento:u.z.number().optional().nullable(),cd_profissional:u.z.string(),cd_procedimento:u.z.string().nullable().optional(),cd_sala:u.z.string().nullable().optional(),situacao:u.z.string().nullable().optional(),lembrete_sms:u.z.string().nullable().optional(),lembrete_whatsapp:u.z.string().nullable().optional(),status:u.z.string().nullable().optional()})}),B=class{async getAgendamentos(e,n){let s=await v.getAgendamentos();return n.send(s).status(200)}async postAgendamento(e,n){let{data:s}=Ye.parse(e.body),r={cd_paciente:s.cd_paciente,cd_profissional:s.cd_profissional,evolucao:"",cd_procedimento:s.cd_procedimento,cd_convenio:1,situacao:"A"},o=await ae.postAtendimento(r);console.log(o),s.cd_atendimento=o.messageServer.cd_atendimento;let a=await v.postAgendamento(s);if(console.log(a),a.status===201){let i=await v.getAgendamentos();return n.status(201).send(i)}return a.status===500?n.status(500).send(a):n.send(o)}async putAgendamento(e,n){}async getProcedimentos(e,n){let s=await v.getProcedimentos();return n.send(s).status(200)}async getSalas(e,n){let s=await v.getSalas();return n.send(s).status(200)}};async function ie(t){let e=new B;t.get("/agendamento/getAll",e.getAgendamentos),t.post("/agendamento/create",e.postAgendamento),t.put("/agendamento/update",e.putAgendamento),t.get("/agendamento/procedimentos",e.getProcedimentos),t.get("/agendamento/salas",e.getSalas)}var k=class{async getProfissional(e){try{return{status:200,messageClient:"Profissional encontrado",messageServer:await p.select("*").from("profissional").where({email:e,ativo:1})}}catch(n){return{status:500,messageClient:"Erro ao buscar profissionais !",messageServer:n}}}},ce=new k;var pe=h(require("bcrypt")),me=h(require("jsonwebtoken")),K=class{async login(e,n){let{email:s,password:r}=e.body;console.log(s,r);let o=await ce.getProfissional(s);if(console.log(o),o.status===500)return n.status(500).send({message:"Internal server error"});if(o.messageServer.length===0)return n.status(404).send({message:"User not found"});console.log(o.messageServer[0].senha);let a=await pe.default.compare(r,o.messageServer[0].senha);if(console.log(a),a){let i=me.default.sign({email:o.messageServer[0].email,name:o.messageServer[0].nm_profissional,permissions:["admin"]},"secret",{expiresIn:"1d"});return console.log(i),n.status(200).send({message:"Login Realizado com sucesso",token:i,userInformation:o.messageServer[0]})}return n.status(401).send({message:"Sem login pra voc\xEA amigo !"})}},le=new K;async function ue(t){t.post("/autenticacao/login",le.login)}var y=(0,ge.fastify)();y.register(fe.default,{origin:!0});y.register(de.default,{swagger:{info:{title:"Projeto Fisio",description:"Documenta\xE7\xE3o da api do projeto",version:"1.0.0"},securityDefinitions:{apiKey:{type:"apiKey",name:"Authorization",in:"header"}},host:`localhost: ${W.PORT}`}});y.register(ye.default,{routePrefix:"/docs",theme:{title:"Projeto Fisio"}});y.register(ue);y.register(Q);y.register(te);y.register(re);y.register(ie);0&&(module.exports={server});
