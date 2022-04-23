
let longueur = 0;
let firstLettre = "";


module.exports = {
    getLongueur(){
        return longueur;
    },

    getFirstLettre(){
        return firstLettre;
    },
    
    setLongueur(int){
        longueur=int;
    },

    setFirstLettre(str){
        firstLettre=str;
    }
};