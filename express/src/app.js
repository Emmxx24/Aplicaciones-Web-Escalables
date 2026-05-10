//busca un archivo .env 
//y carga las variables de entorno.
require('dotenv').config(); 

const Server = require("./config/server");
const server = new Server();

server.listen();