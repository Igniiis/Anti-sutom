const express = require("express");
const router = express.Router(); //express();
const poursuite = require('../controllers/c_poursuite');

//route de base
router.get('/poursuite', poursuite.affichage)


router.post('/caca',poursuite.calcul);


module.exports = router;