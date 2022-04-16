const express = require("express");
const router = express.Router();
const indexJS = require('../controllers/c_index');

let i = 0;
//route de base
router.get('/', indexJS.affichage)


module.exports = router;