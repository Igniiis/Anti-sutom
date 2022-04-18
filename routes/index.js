const express = require("express");
const router = express.Router(); //express();
const indexJS = require('../controllers/c_index');

//route de base
router.get('/', indexJS.affichage)

//probleme ici
router.post('/decouverte',indexJS.postFonction);


module.exports = router;