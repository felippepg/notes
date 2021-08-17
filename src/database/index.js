const Sequelize = require('sequelize');
const configDatabase = require('../config/database');
const Note = require('../models/Notes');

const connection = new Sequelize(configDatabase);
Note.init(connection);
module.exports = connection;
