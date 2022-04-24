let user = require('../value/mot');

//route de base
exports.affichage =  function(request,response) {
    response.render('index.ejs');
}


exports.postFonction = function(request,response) {
    user.setFirstLettre(request.body.firstLettreChoice);
    user.setLongueur(parseInt(request.body.nbLettreChoice));
    user.setLettrePossible('abcdefghijklmnopqrstuvwxyz');
    response.redirect('/poursuite');
}