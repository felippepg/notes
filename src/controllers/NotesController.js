const Note = require('../models/Notes');

class NoteController {
  async showAll(request, response) {
    const notes = await Note.findAll();
    if (notes.length === 0) {
      return response.json({ message: 'There are no registered notes' });
    }
    return response.json(notes);
  }

  async showOne(request, response) {
    const { id } = request.query;

    if (!id) {
      return response.json({ messge: 'Insert a valid ID' });
    }

    const note = await Note.findOne({ where: { id } });

    if (!note) {
      return response.json({ message: 'Note not found' });
    }

    return response.json(note);
  }

  async create(request, response) {
    const { title, body } = request.body;
    try {
      const note = await Note.create({ title, body });

      return response.status(200).json({ note, message: 'Note successfully created' });
    } catch (err) {
      return response.status(400).json({ err, message: 'Failed to create note' });
    }
  }

  async update(request, response) {
    const { id } = request.query;
    const { title, body } = request.body;
    const note = await Note.findByPk(id);

    if (!note) {
      return response.json({ message: 'Note not found' });
    }

    if (title) {
      note.title = title;
    }

    if (body) {
      note.body = body;
    }

    note.save();
    return response.send({ note, message: 'Note successfully updated' });
  }

  async delete(request, response) {
    const { id } = request.query;
    const note = await Note.findByPk(id);

    if (!note) {
      return response.json({ message: 'Note not found' });
    } else {
      await note.destroy();
      return response.json({ message: 'Note successfully deleted' });
    }
  }
}

module.exports = new NoteController();
