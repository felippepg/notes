const NotesController = require('../controllers/NotesController');

const route = require('express').Router();

route.get('/show-all', NotesController.showAll);
route.get('/show-note/:id', NotesController.showOne);
route.post('/create-note', NotesController.create);
route.put('/update-note/:id', NotesController.update);
route.delete('/delete-note/:id', NotesController.delete);

module.exports = route;
