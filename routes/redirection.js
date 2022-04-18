const express = require("express");
const router = express.Router();
const redirection = require('../controllers/c_redirection');

//route pour redirection
router.get('/redirectionner', redirection.affichage)

router.post('/decouverte', redirection.retourDecouverte);

module.exports = router;


// app.get('/redirectionner',function(request,response){
//     response.render('redirect.ejs',{nom:Lnom,prenom:Lprenom});
// });


// app.post('/redirectionner',function(request,response){
//     response.redirect('/decouverte');
// })
