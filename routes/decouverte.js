const express = require("express");
const router = express();
const c_decouverte = require('../controllers/c_decouverte');


//route de découverte
router.get('/decouverte', c_decouverte.affichage);

router.post('/redirectionner',c_decouverte.valider);

module.exports = router;


//code de base (quand dans un seul fichier app)
// app.get('/decouverte',function(req,res){
//     res.render('index.ejs', {nom:Lnom,prenom:Lprenom,liste:french}); //on affiche le .ejs et on set le parametre name
// });

// app.post('/decouverte',function(request,response){
//     Lnom = request.body.nom;
//     Lprenom = request.body.prenom;
//     response.redirect('/redirectionner');
// });