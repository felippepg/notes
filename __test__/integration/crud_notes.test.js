const Note = require("../../src/models/Notes");
const app = require('../../src/app');
const request = require('supertest');

require('../../src/database');

beforeEach(async () => {
    await Note.truncate({ cascade: true });
});

describe('Crud Note', () => {
    it('Should create a note', async () => {
        const response = await request(app)
            .post('/create-note')
            .send({
                title: 'Não esquecer',
                body: 'Passar no mercado e comprar pão'
            });
        expect(response.body.message).toBe("Nota criada com sucesso")
    });

    it('Should return all notes at the database', async () => {
        const note1 = await Note.create({
            title: 'teste1',
            body: 'corpo1',
        });
        const note2 = await Note.create({
            title: 'teste2',
            body: 'corpo2',
        });
        const note3 = await Note.create({
            title: 'teste3',
            body: 'corpo3',
        });

        const response = await request(app)
            .get('/show-all')

        expect(response.body).toStrictEqual([{
            id: 1,
            title: "teste1",
            body: "corpo1",
            updatedAt: expect.anything(),
            createdAt: expect.anything(),
        },
        {
            id: 2,
            title: "teste2",
            body: "corpo2",
            updatedAt: expect.anything(),
            createdAt: expect.anything(),
        },
        {
            id: 3,
            title: "teste3",
            body: "corpo3",
            updatedAt: expect.anything(),
            createdAt: expect.anything(),
        },])
    });

    it('Should uptade a note', async () => {
        const note1 = await Note.create({
            title: 'teste1',
            body: 'corpo1',
        });

        const response = await request(app)
            .put('/update-note/')
            .query({ id: note1.id })
            .send({
                title: 'novo título',
                body: 'novo conteúdo'
            });

        expect(response.body).toStrictEqual(
            {
                note:
                {
                    id: 1,
                    title: "novo título",
                    body: "novo conteúdo",
                    updatedAt: expect.anything(),
                    createdAt: expect.anything(),
                }
            }
        )
    })

    it('Should delete a note', async () => {
        const note1 = await Note.create({
            title: 'teste1',
            body: 'corpo1',
        });

        const response = await request(app)
            .delete('/delete-note/')
            .query({ id: note1.id })

        console.log(response.body);
        expect(response.body.message).toBe('Note successufuly deleted')
    })
})