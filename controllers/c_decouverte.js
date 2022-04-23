//variables de tests
let lettre1 = "a";

let user = require('../value/identite');


const french = require("an-array-of-french-words").filter(premiereLettre) // npm install an-array-of-french-words

//.filter(d => /anti/.test(d));
//tous les mots contenant "anti"

//.filter(word => word.length > 6)
//longueur du mot


function premiereLettre(element){
    return !element.charAt(0).localeCompare(lettre1);
    //if(res===1) return true;
    //return false;
     
}

//.filter(premiereLettre)


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