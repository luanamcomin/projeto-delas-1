const mongoose = require("mongoose");

const empreendedoraSchema = new mongoose.Schema(
    {
        nomeDaEmpreendedora: { type: String, require: true },
        nomeDoEmpreendimento: { type: String, require: true },
        cpfCnpj: { type: String, require: true },
        redeSocial: { type: Array },
        site: { type: String },
        whatsapp: { type: String, require: true },
        email: { type: String, require: true },
        nincho: { type: Array, require: true },
        categoria: { type: Array, require: true },
        tag: { type: Array, require: true },
        endereco: { type: Object, require: true },
        descricao: { type: String, require: true },
        youliked: { type: Boolean }
    }
)

const empreendedoras = mongoose.model("empreendedoras", empreendedoraSchema);

module.exports = empreendedoras;