
let longueur = 0;
let firstLettre = "";

let mot = "";

let lettrePossible = "abcdefghijklmnopqrstuvwxyz";

module.exports = {
    getLettrePossible(){
        return lettrePossible;
    },

    getLongueur(){
        return longueur;
    },

    getFirstLettre(){
        return firstLettre;
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