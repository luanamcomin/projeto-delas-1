const express = require ("express");
const controller = require ("../controllers/clienteController");
 
const router = express.Router();

router.get("/", controller.getAllClientes);
router.post("/", controller.createClientes)