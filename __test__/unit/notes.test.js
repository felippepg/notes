const Note = require('../../src/models/Notes');
require('../../src/database');

describe('Notes', () => {
  it('Should be create note', async () => {
    const note = await Note.create({ title: 'Primeiro teste', body: 'Funcionou' });

    expect(note.body).toBe('Funcionou');
  });
});
