//route de base
exports.affichage =  function(request,response) {
    response.render('index.ejs');
}

//probleme vers ici
exports.postFonction = function(request,response) {
    response.redirect('/redirectionner');
}