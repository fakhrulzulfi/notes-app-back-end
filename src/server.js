const Hapi = require('@hapi/hapi');
// const routes = require('./api/notes/routes');
const notes = require('./api/notes');
const NotesService = require('./services/inMemory/notesService');

const init = async () => {
  const notesService = new NotesService();

  const server = Hapi.server({
    port: 3000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // server.route(routes); //dihapus

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
    },
  });

  await server.start();
  console.log(`Server sedang berjalan di ${server.info.uri}`);
};

init();
