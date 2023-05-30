const express = require ("express");
const EmpreendedoraController = require ("../controllers/empreendedoraController");
 
const router = express.Router();

router
.get("/", EmpreendedoraController.getAllEmpreendedoras)
.post("/", EmpreendedoraController.createEmpreendedora)
.put("/:id", EmpreendedoraController.updateEmpreendedora)
.delete("/:id", EmpreendedoraController.deleteEmpreendedora)

module.exports = router