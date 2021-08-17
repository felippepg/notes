const Note = require('../models/Notes');

class NoteController {
  async showAll(request, response) {
    const notes = await Note.findAll();
    return response.send(notes);
  }

  async create(request, response) {
    const { title, body } = request.body;
    try {
      const note = await Note.create({ title, body });

      return response.status(200).json({ note, message: 'Nota criada com sucesso' });
    } catch (err) {
      return response.status(400).json({ err, message: 'falha ao criar nota' });
    }
  }

  async update(request, response) {
    const { id } = request.query;
    const { title, body } = request.body;
    const note = await Note.findByPk(id);
    // console.log(request.body)
    // console.log(id)
    // console.log(note);

    if (!note) {
      return response.json({ message: 'Note not found' })
    }

    if (title) {
      note.title = title
    }

    if (body) {
      note.body = body
    }
    return response.send({ note });
  }
}

module.exports = new NoteController();
