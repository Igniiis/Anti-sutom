const express = require("express");
const router = express.Router();


router.get('/redirectionner',function(request,response){
    response.render('redirect.ejs',{nom:Lnom,prenom:Lprenom});
});

module.exports = router;