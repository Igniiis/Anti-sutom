const express = require("express");
const router = express.Router(); //express();
const poursuite = require('../controllers/c_poursuite');

//route de base
router.get('/poursuite', poursuite.affichage);

router.get('/poursuite/:mot',poursuite.affichageP1);

router.get('/poursuite/:mot/:lettrePresente',poursuite.affichageP2);

router.get('/poursuite/:mot/:lettrePresente/:lettreImpossible',poursuite.affichageP3);

router.get('/poursuite/:mot//:lettreImpossible',poursuite.affichageP4);

//router.post('/test',poursuite.test);

module.exports = router;