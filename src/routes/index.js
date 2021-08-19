const NotesController = require('../controllers/NotesController');

const route = require('express').Router();

route.get('/show-all', NotesController.showAll);
route.get('/show-note', NotesController.showOne);
route.post('/create-note', NotesController.create);
route.put('/update-note', NotesController.update);
route.delete('/delete-note', NotesController.delete);

module.exports = route;
