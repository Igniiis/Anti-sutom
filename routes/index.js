const express = require("express");
const router = express.Router(); //express();
const indexJS = require('../controllers/c_index');

//route de base
router.get('/', indexJS.affichage)


router.post('/redirectionner',indexJS.postFonction);


module.exports = router;