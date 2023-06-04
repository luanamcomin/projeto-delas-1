//importação
const express = require("express");
const index = require("./routes/index");
const db = require("./config/dbConnect.js");
const empreendedoras = require("./routes/empreendedora");
const clientes = require("./routes/cliente");
const app = express();

app.use(express.json());
app.use("/", index);
app.use("/empreendedoras" , empreendedoras); //rota de empreendedoras
app.use("/clientes" , clientes); //rota de clientes

//sintaxe de conexão
db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso')
});

//exportação de modulos
module.exports = app; 
 