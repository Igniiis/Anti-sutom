//route de redirection
exports.affichage =  function(request,response) {
    response.render('redirect.ejs',{nom:Lnom,prenom:Lprenom});
}

exports.retourDecouverte = function(request,response) {
    response.redirect('/decouverte');
}


// app.get('/redirectionner',function(request,response){
//     response.render('redirect.ejs',{nom:Lnom,prenom:Lprenom});
// });


// app.post('/redirectionner',function(request,response){
//     response.redirect('/decouverte');
// })
