let user = require('../value/mot');

//route de base
exports.affichage =  function(request,response) {
    response.render('index.ejs');
}


exports.postFonction = function(request,response) {
    let mot = request.body.firstLettreChoice + "$".repeat(request.body.nbLettreChoice-request.body.firstLettreChoice.length);

    user.setFirstLettre(request.body.firstLettreChoice);
    user.setLongueur(parseInt(request.body.nbLettreChoice));
    user.setMot(mot);
    
    user.setLettrePossible('abcdefghijklmnopqrstuvwxyz');
    response.redirect('/poursuite');
}