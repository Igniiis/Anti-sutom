//variables de tests

let user = require('../value/identite');


const french = require("an-array-of-french-words"); // npm install an-array-of-french-words

exports.affichage = function (request,response) {
    response.render('formulaire.ejs', {nom:user.getNom(),prenom:user.getPrenom(),liste:french}); //on affiche le .ejs et on set le parametre name)
}

exports.valider = function (request, response) {
    user.setNom(request.body.nom);
    user.setPrenom(request.body.prenom);
    response.redirect('/redirectionner');
}


//code de base (quand dans un seul fichier app)
// app.get('/decouverte',function(req,res){
//     res.render('index.ejs', {nom:Lnom,prenom:Lprenom,liste:french}); //on affiche le .ejs et on set le parametre name
// });

// app.post('/decouverte',function(request,response){
//     Lnom = request.body.nom;
//     Lprenom = request.body.prenom;
//     response.redirect('/redirectionner');
// });