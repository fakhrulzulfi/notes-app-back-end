const routes = (handler) => [
    {
        method: 'POST',
        path: '/notes',
        handler: handler.postNoteHandler, // Hanya menerima dan menyimpan SATU note.
    },
    {
        method: 'GET',
        path: '/notes',
        handler: handler.getNotesHandler, // Mengembalikan BANYAK note
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: handler.getNoteByIdHandler, // Mengembalikan SATU note
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: handler.putNoteByIdHandler, // Hanya menerima dan menyimpan SATU note
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: handler.deleteNoteByIdHandler, // Hanya menerima SATU note
    },
];

module.exports = routes;
