const express = require("express");
const router = express.Router(); //express();
const poursuite = require('../controllers/c_poursuite');

//route de base
router.get('/poursuite', poursuite.affichage);

router.get('/poursuite/:mot',poursuite.affichagePrecis);

//   /poursuite/:mot/:lettreImpossibles/:lettrePresentes

router.post('/poursuite',poursuite.calcul);

module.exports = router;