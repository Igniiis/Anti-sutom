const express = require("express");
const router = express.Router();
const indexJS = require('../controllers/c_index');

//route de base
router.get('/', indexJS.affichage)

//probleme ici
router.post('/',indexJS.postFonction);


module.exports = router;