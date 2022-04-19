const express = require('express');
const app = express();
const port = 3000;

//prévenir express que l'on va utiliser des .ejs pour l'affichage
app.set('view-engine', 'ejs');

//on prévient l'appli que l'on prend ces formes et qu'on veut récupérer les infos qui y sont
app.use(express.urlencoded({ extended: false }));

//route de base
app.use(require('./routes/index'));
//app.use('/',require('./routes/index'));

//route pour découvrir les input
app.use(require('./routes/decouverte'));
//app.use('/decouverte',require('./routes/decouverte'));

//partie où les personnes sont redirectionner après avoir cliquer
app.use(require('./routes/redirection'));


//route options // facon de base sans plusieurs fichiers
app.get('/options', function(request, response) {
    response.send('page option -> bravo tu as compris les routes');
})


// le serveur tourne sur le port précisé
app.listen(port);