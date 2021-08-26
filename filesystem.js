const fs = require('fs');
const path = require('path');
console.log("creation du dossier toto");
fs.mkdirSync(path.join(__dirname, 'toto'), {});
console.log("le dossier toto a ete cree");
fs.mkdir(path.join(__dirname, 'toto_async'), {}, function(err) {
    if (err) throw err;
    // rendu ici il n'y a pas d'erreur
    console.log('le dossier toto_async vient d etre cree');
});
console.log("fin du programme");
