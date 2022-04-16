const express = require('express');
const app = express();
const port = 3000;
const french = require("an-array-of-french-words"); // npm install an-array-of-french-words
const req = require('express/lib/request');
const res = require('express/lib/response');

console.log(french);


//variables de tests
let Lnom = 'malleret';
let Lprenom = 'maxence';

//prévenir express que l'on va utiliser des .ejs pour l'affichage
app.set('view-engine','ejs');

//on prévient l'appli que l'on prend ces formes et qu'on veut récupérer les infos qui y sont
app.use(express.urlencoded({extended:false}));

let i = 0;
//route de base
app.get('/', function(request,response) {
    response.send('page reset test ' + i);
    i++;
})



//route pour tester les input
app.get('/decouverte',function(req,res){
    res.render('index.ejs', {nom:Lnom,prenom:Lprenom,liste:french}); //on affiche le .ejs et on set le parametre name
});

app.post('/decouverte',function(request,response){
    Lnom = request.body.nom;
    Lprenom = request.body.prenom;
    response.redirect('/redirectionner');
});


//partie où les personnes sont redirectionner après avoir cliquer
app.get('/redirectionner',function(request,response){
    response.render('redirect.ejs',{nom:Lnom,prenom:Lprenom});
});


app.post('/redirectionner',function(request,response){
    response.redirect('/decouverte');
})


//route options
app.get('/options', function(request,response) {
    response.send('page option -> bravo tu as compris les routes');
})


// le serveur tourne sur le port précisé
app.listen(port);