const { getFirstLettre } = require('../value/mot');
let user = require('../value/mot');

exports.affichage = function(request,response){
    let lettre1 = user.getFirstLettre();
    let long = user.getLongueur();

    let french = require('an-array-of-french-words').filter(function(element){
        if(element.includes('-')){
            return false;
        }
        if(element.length!=long){
            return false;
        }
        return !element.slice(0,lettre1.length).localeCompare(lettre1);
    });

    //on créé une liste avec toutes les lettres de l'alphabet
    //dès que l'on trouve l'une de ces lettres dans l'un des mots, on l'enlève de la liste
    let optimizeAlphabet = "abcdefghijklmnopqrstuvwxyz";
    french.forEach(element => {
        for(let i=0;i<optimizeAlphabet.length;i++){
            if(element.includes(optimizeAlphabet[i])){
                console.log(optimizeAlphabet[i]);
                optimizeAlphabet.replace(optimizeAlphabet[i],'');
            }
        }
    });
    console.log(optimizeAlphabet);

    //on met ensuite à jour la liste des lettres possibles en enlevant de la liste des lettres Possibles toutes les 
    //lettres étant resté dans la liste de vérification "optimizeAlphabet" car cela signifit qu'elles n'ont jamais 
    //été utilisé dans la liste des bons mots donc ce ne sont pas des lettres possibles
    for (let i = 0; i < user.getLettrePossible().length; i++) {
        if(!optimizeAlphabet.includes(user.getLettrePossible()[i])){
            user.RemoveLettrePossible(user.getLettrePossible()[i]);
        }
    }

    response.render('poursuite.ejs',{longueur:long,premiereLettre:lettre1,france:french,lettrePossible:user.getLettrePossible()});
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