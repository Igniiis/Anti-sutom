const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



//prévenir express que l'on va utiliser des .ejs pour l'affichage
app.set('view-engine', 'ejs');

//on prévient l'appli que l'on prend ces formes et qu'on veut récupérer les infos qui y sont
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views',__dirname+'/views'); //on dit que l'on veut que les vues viennent du dir /view




//pour relier le css au projet
app.use(express.static(__dirname + '/public'));




//route de base
app.use(require('./routes/index'));

//route pour la suite de la recherche
app.use(require('./routes/poursuite'));



// le serveur tourne sur le port précisé
app.listen(port);

console.log("Serveur lancé sur le port " + port);