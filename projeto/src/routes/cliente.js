const express = require ("express");
const ClienteController = require ("../controllers/clienteController");
 
const router = express.Router();

router
.get("/", ClienteController.getAllClientes)
.post("/", ClienteController.createClientes)

module.exports = router