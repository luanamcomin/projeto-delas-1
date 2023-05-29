const clientes = require("../models/clientes.js");

class ClienteController {

  static getAllclientes = (req, res) => {
    clientes.find((err, clientes) => {
      res.status(200).json(clientes);
    })
  };

  static createClientes = (req, res) => {
    let cliente = new cliente(req.body);

    cliente.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar cliente` })
      } else {
        res.status(201).send(cliente.toJSON())
      }
    })
  }
}


module.exports = ClienteController
