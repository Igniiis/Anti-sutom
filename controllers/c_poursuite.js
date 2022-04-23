const { getFirstLettre } = require('../value/mot');
let user = require('../value/mot');

exports.affichage = function(request,response){
    let lettre1 = user.getFirstLettre();
    let long = user.getLongueur();

    let french = require('an-array-of-french-words').filter(function(element){
        if(element.length!=long){
            return false;
        }
        return !element.slice(0,lettre1.length).localeCompare(lettre1);
    });

    console.log(french);
    response.render('poursuite.ejs',{longueur:long,premiereLettre:lettre1,france:french});
}

exports.calcul = function(request,response){
    console.log("sheeeesh");
}



/**
.filter(d => /anti/.test(d));
//tous les mots contenant "anti"

.filter(word => word.length > 6)
//longueur du mot


function premiereLettre(element){
    return !element.charAt(0).localeCompare(lettre1);     
}

.filter(premiereLettre)
 */