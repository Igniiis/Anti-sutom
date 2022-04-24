
let longueur = 0;
let firstLettre = "";

let mot = "";

let lettrePossible = "abcdefghijklmnopqrstuvwxyz";

let lettreImpossible = "";

module.exports = {

    getMot(){
        return mot;
    },

    getLettrePossible(){
        return lettrePossible;
    },

    getLongueur(){
        return longueur;
    },

    getFirstLettre(){
        return firstLettre;
    },

    setMot(str){
        mot = str;
    },

    setLettrePossible(str){
        lettrePossible = str;
    },
    RemoveLettrePossible(str){
        lettrePossible=lettrePossible.replace(str,'');
    },
    
    setLongueur(int){
        longueur=int;
    },

    setFirstLettre(str){
        firstLettre=str;
    }
};