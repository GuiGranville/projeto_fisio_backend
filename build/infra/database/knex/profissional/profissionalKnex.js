var n=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var m=(r,s)=>{for(var o in s)n(r,o,{get:s[o],enumerable:!0})},f=(r,s,o,a)=>{if(s&&typeof s=="object"||typeof s=="function")for(let e of u(s))!l.call(r,e)&&e!==o&&n(r,e,{get:()=>s[e],enumerable:!(a=p(s,e))||a.enumerable});return r};var A=r=>f(n({},"__esModule",{value:!0}),r);var B={};m(B,{profissionalKnex:()=>g});module.exports=A(B);var c=require("knex"),P={client:"pg",connection:{host:process.env.DATABASE_HOST,port:Number(process.env.DATABASE_PORT),user:process.env.DATABASE_USER,password:process.env.DATABASE_PASSWORD,database:process.env.DATABASE_NAME}},S=(0,c.knex)(P),t=S;var i=class{async getProfissionais(){try{return await t.select("*").from("profissional").where({ativo:1})}catch(s){return{status:500,messageClient:"Erro ao buscar profissionais !",messageServer:s}}}async postProfissional(s){try{return await t("profissional").insert(s),{status:201,messageClient:"Profissional criado com sucesso!"}}catch(o){return{status:500,messageClient:"Erro ao criar profissional !",messageServer:o}}}async putProfissional(s,o){try{return await t("profissional").where({cd_profissional:o}).update(s),{status:200,messageClient:"Profissional atualizado com sucesso!"}}catch(a){return{status:500,messageClient:"Erro ao atualizar profissional !",messageServer:a}}}},g=new i;0&&(module.exports={profissionalKnex});
