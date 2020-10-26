const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middleware);
server.use(router);
server.listen(port, () => {
  console.log(`Servidor em execução em http://localhost:${port}`);
});
