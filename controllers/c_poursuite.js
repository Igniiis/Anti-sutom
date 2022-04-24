const res = require('express/lib/response');
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


exports.affichagePrecis = function (request,response) {
    //demande les infos de l'url
    let long = request.params.mot.length;
    let mot = request.params.mot;

    let motLettres = [];

    for(let i = 0; i < mot.length; i++){
        if(mot[i]!="$"){
            motLettres.push( {
                lettre:mot[i],
                place:i
            })
        }
    }

    let french = require('an-array-of-french-words').filter(function(element){
        element = element.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //enlève tout accent


        if(element.includes('-')){ //enlève tout mot avec un "-" dedans
            return false;
        }
        if(element.length!=long){ //enlève tout mot d'une autre taille que celle que l'on veut
            return false;
        }

        for (let i = 0; i < motLettres.length; i++) {
            if(element[motLettres[i].place]!=motLettres[i].lettre){
                return false;
            }
        }
        return true;
    });
    response.render("test.ejs",{france:french});
}


exports.calcul = function(request,response){
    //res.redirect(`/poursuite/${long}/${mot}`);
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