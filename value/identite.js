
let nom = "malleret";
let prenom = "maxence";


module.exports = {
    getNom:()=>{
        return nom;
    },

    getPrenom:() => {
        return prenom
    },

    setNom:(name)=>{
        nom = name;
    },
    setPrenom:(prename)=>{
        prenom = prename;
    }
};