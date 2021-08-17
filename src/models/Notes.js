const { Model, DataTypes } = require('sequelize');

class Note extends Model {
  static init (connection) {
    super.init({
      title: DataTypes.STRING,
      body: DataTypes.TEXT
    }, {
      sequelize: connection
    });
  }
}

module.exports = Note;
