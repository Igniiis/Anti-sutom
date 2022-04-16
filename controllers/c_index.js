let i = 0;
//route de base
exports.affichage =  function(request,response) {
    response.send('page reset test ' + i);
    i++;
}