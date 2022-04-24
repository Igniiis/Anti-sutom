const { getFirstLettre } = require('../value/mot');
let user = require('../value/mot');

exports.affichage = function(request,response){
    let lettre1 = user.getFirstLettre();
    let long = user.getLongueur();

    let french = require('an-array-of-french-words').filter(function(element){
        //code pour enlever les accents
        element = element.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        if(element.includes('-')){
            return false;
        }
        if(element.length!=long){
            return false;
        }
        return !element.slice(0,lettre1.length).localeCompare(lettre1);
    });

    let optimizeAlphabet = user.getLettrePossible();
    french.forEach(element => {
        for(let i=0;i<optimizeAlphabet.length;i++){
            if(element.includes(optimizeAlphabet[i])){
                optimizeAlphabet=optimizeAlphabet.replace(optimizeAlphabet[i],'');
            }
        }
    });
    optimizeAlphabet=optimizeAlphabet.replace('a','');

    for(let i=0;i<optimizeAlphabet.length;i++){
        if(user.getLettrePossible().includes(optimizeAlphabet[i])){
            user.RemoveLettrePossible(optimizeAlphabet[i]);
        }
    }

    response.render('poursuite.ejs',{longueur:long,premiereLettre:lettre1,france:french,lettrePossible:user.getLettrePossible(),mot:user.getMot()});
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