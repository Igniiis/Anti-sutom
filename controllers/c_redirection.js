//variables de tests
let user = require('../value/identite');

//route de redirection
exports.affichage =  function(request,response) {
    response.render('redirect.ejs',{nom:user.getNom(),prenom:user.getPrenom()});
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
