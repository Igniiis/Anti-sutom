const res = require('express/lib/response');
let user = require('../value/mot');

exports.affichage = function(request,response){
    //à update : lorsque l'on appelle cette fonction c'est losque on a cette adresse localhost:3000/poursuite
    //ici on a rien à faire de seulement ca donc on redirige la personne vers localhost:3000/    (index)
    //cette fonction ne doit que faire envoyé vers index, donc quand on arrive dessus on fait 
    //response.redirect('/');
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


exports.affichageP1 = function (request,response) {
    let french = affichagePrecis(request.params.mot);
    response.render("test.ejs",{france:french,mot:request.params.mot,lettrePresente:"",lettreImpossible:""});
}

exports.affichageP2 = function (request,response) {
    let french = affichagePrecis(request.params.mot, request.params.lettrePresente);
    response.render("test.ejs",{france:french,mot:request.params.mot,lettrePresente:request.params.lettrePresente,lettreImpossible:""});
}

exports.affichageP3 = function (request,response) {
    let french = affichagePrecis(request.params.mot, request.params.lettrePresente, request.params.lettreImpossible);
    response.render("test.ejs",{france:french,mot:request.params.mot,lettrePresente:request.params.lettrePresente,lettreImpossible:request.params.lettreImpossible});
}

exports.affichageP4 = function (request,response){
    let french = affichagePrecis(request.params.mot,"",request.params.lettreImpossible);
    response.render("test.ejs",{france:french,mot:request.params.mot,lettrePresente:"",lettreImpossible:request.params.lettreImpossible});
}

function affichagePrecis(mot,lettrePresente,lettreImpossible) {
    let long = mot.length;
    lettreImpossible = lettreImpossible || "";
    lettrePresente = lettrePresente || "";

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
        if(element.includes('-')){ //enlève tout mot avec un "-" dedans
            return false;
        }
        if(element.length!=long){ //enlève tout mot d'une autre taille que celle que l'on veut
            return false;
        }
        
        element = element.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //enlève tout accent


        for (let i = 0; i < lettreImpossible.length; i++) {
            if(element.includes(lettreImpossible[i])){
                return false;
            }
        }

        let test = true;
        let j = 0;
        while(test && j<lettrePresente.length){
            if(!element.includes(lettrePresente[j])){
                test=false;
                break;
            }
            j++;
        }
        if(!test){
            return false;
        }

        for (let i = 0; i < motLettres.length; i++) {
            if(element[motLettres[i].place]!=motLettres[i].lettre){
                return false;
            }
        }
        return true;
    });
    return french;
}


exports.ajoutLettre = function (request,response) {
    
    let mot = request.params.mot;
    let lettreImpossible = request.params.lettreImpossible || "";
    let lettrePresente = request.params.lettrePresente || "";

    let a = request.body.nouvelleLettrePresente || "";
    let b = request.body.nouvelleLettreImpossible || "";

    lettrePresente = lettrePresente + a;
    lettreImpossible = lettreImpossible + b;

    response.redirect(`/poursuite/${mot}/${lettrePresente}/${lettreImpossible}`);
}


/**
function premiereLettre(element){
    return !element.charAt(0).localeCompare(lettre1);     
}

.filter(premiereLettre)
 */
