const express = require("express");
const router = express.Router(); //express();
const poursuite = require('../controllers/c_poursuite');

//route de base
router.get('/poursuite', poursuite.affichage);

router.get('/poursuite/:mot',poursuite.affichageP1);

//   /poursuite/:mot/:lettreImpossibles/:lettrePresentes

router.get('/poursuite/:mot/:lettrePresente',poursuite.affichageP2);

router.get('/poursuite/:mot/:lettrePresente/:lettreImpossible',poursuite.affichageP3);

router.post('/poursuite',poursuite.calcul);

module.exports = router;