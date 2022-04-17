let i = 0;
//route de base
exports.affichage =  function(request,response) {
    response.render('index.ejs',{nbRefresh:i});
    i++;
}

//probleme vers ici
exports.postFonction = function(request,response) {
    response.redirect('/decouverte');
}