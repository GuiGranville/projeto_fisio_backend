var s=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var o=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var c=(t,e)=>{for(var p in e)s(t,p,{get:e[p],enumerable:!0})},m=(t,e,p,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of o(e))!a.call(t,i)&&i!==p&&s(t,i,{get:()=>e[i],enumerable:!(n=r(e,i))||n.enumerable});return t};var u=t=>m(s({},"__esModule",{value:!0}),t);var b={};c(b,{pacienteCountRouteSwaggerConfig:()=>y,pacienteCreateRouteSwaggerConfig:()=>g,pacienteDeleteRouteSwaggerConfig:()=>l,pacienteGetAllRouteSwaggerConfig:()=>d});module.exports=u(b);var d={description:"Route to get all paciente, returns some data about the situation.",tags:["Paciente"],response:{200:{description:"Successful response!",type:"array",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}},y={description:"Route to get all paciente, returns some data about the situation.",tags:["Paciente"],response:{200:{description:"Successful response!",type:"number",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}},g={description:"Route to register a paciente.",tags:["Paciente"],response:{201:{description:"Successful response!",type:"array",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}},l={description:"Route to delete a paciente",tags:["Paciente"],response:{200:{description:"Successful response!",type:"array",properties:{message:{type:"string",description:"Application status message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}},500:{description:"Application error!",type:"object",properties:{message:{type:"string",description:"Application error message"},uptime:{type:"number",description:"Time the application has been up"},responseTime:{type:"number",description:"Response delay time"},timestamp:{type:"number",description:"Request date"}}}}};0&&(module.exports={pacienteCountRouteSwaggerConfig,pacienteCreateRouteSwaggerConfig,pacienteDeleteRouteSwaggerConfig,pacienteGetAllRouteSwaggerConfig});
