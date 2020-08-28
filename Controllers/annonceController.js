let annonce = require('../models/annonceModel');
let connection = require('../db.js');
let annonceList = [];


// liste toutes les annonces 

let IdAnnonce = (function(req,body,IdAnnonce) {
connection.query(" SELECT * from annonce ;", function (error, resultSQL) {
    if (error) {
    response.status(400).send(error);
    }
    else {
    response.status(200);
    AnnonceList = resultSQL;
    console.log( AnnonceList);
    response.render('AnnonceList.ejs', {Annonce:AnnonceList});
    }
    });

// Afficher une seule annonce

connection.query("Select * from Annonce WHERE IdAnnonce = ?", IdAnnonce ,
function (error, resultSQL) {
if (error) {
response.status(400).send(error);
}
else {
response.status(200);
Annonces = resultSQL;
response.render('Addannonce.ejs', {IdAnnonce:IdAnnonce, Description:Annonce[0].Description, Prix:Annonnce[0].Prix,Telephone:Annonce [0].Telephone, Mail:Annonce[0].Mail, Adresse:Annonce[0].Adresse});
}
});

// Ajouter une annonce

let Annonce = new annonce (IdAnnonce,Description, prix,Telephone,Mail,Adresse);
console.log(Annonce);
connection.query("INSERT INTO Annonce set ?", Annonce, function (error, resultSQL) {
if(error) {
response.status(400).send(error);
}
else{
response.status(201).redirect('/Annonce');
}
});

//Modifier une annonce

let newAnnonce = newAnnonce (IdAnnonce,Description, prix,Telephone,Mail,Adresse);
console.log(newAnnonce);
connection.query("UPDATE Annonce SET ? WHERE IdAnnonce = ?",
[annonce, request.body.IdAnnonce], function (error, resultSQL) {
if(error) {
console.log(error);
response.status(400).send(error);
}
else{
response.status(202).redirect('/Annonce');
}
});

//Supression d'une annonce

let sql = "DELETE FROM `Annonce` WHERE `Annonce`.`IdAnnonce` = ?";
connection.query( sql , [request.params.IdAnnonce], (error, resultSQL) => {
if(error) {
response.status(400).send(error);
}
else{
response.redirect('/Annonce');
}
});


})
