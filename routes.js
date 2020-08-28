let express = require('express');
let router = express.Router();  

//Importer les controllers

var annonceController = require('./controllers/annonceController');
var annonceControllerApi = require('./controllers/annonceControllerApi');

router.get('/', (request,response)=> response.send('Hello world'));

// les routes API

router.get('/api/Annonce/list',annonceControllerApi.annonceList);
router.get('/api/Annonce/:IdAnnonce',AnnonceControllerApi.getAnnonce);
router.post('/api/Annonce/add',AnnonceControllerApi.AnnonceNew);
router.put('/api/Annonce/update/:IdAnnonce',AnnonceControllerApi.AnnonceUpdate);
router.delete('/api/annonce/delete/:IdAnnonce',AnnonceControllerApi.deleteAnnonce);


module.exports = router;