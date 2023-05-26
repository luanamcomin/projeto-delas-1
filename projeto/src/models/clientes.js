const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema(
    {
        id: { type: Number },
        nome: { type: String },
        cpf: { type: String },
        dataDeNascimento: { type: String },
        genero: { type: String },
        telefone1: { type: String },
        telefone2: { type: String },
        email: { type: String },
        endereco: { type: Object },
        descricao: { type: String },
        youliked: { type: Boolean }
    }
)