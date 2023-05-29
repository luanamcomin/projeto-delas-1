const express = require ("express");
const ClienteController = require ("../controllers/clienteController");
 
const router = express.Router();

router
.get("/", ClienteController.getAllclientes)
.post("/", ClienteController.createClientes)

module.exports = router