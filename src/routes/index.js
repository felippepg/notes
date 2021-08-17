const { routes } = require('../app');
const NotesController = require('../controllers/NotesController');

const route = require('express').Router();

route.get('/show-all', NotesController.showAll);
route.post('/create-note', NotesController.create);
route.put('/update-note', NotesController.update);

module.exports = route;
