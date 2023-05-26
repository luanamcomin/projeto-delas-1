const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:d2ccaUNbYkgItit6@luanamcomin.g24o40c.mongodb.net/empreendedoras");

let db = mongoose.connection;

module.exports = db;
