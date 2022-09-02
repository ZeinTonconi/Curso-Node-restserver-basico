const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = express();

        this.middlewares();
        
        
        this.usuariosPath = '/api/users';
        this.routes();

    }

    middlewares() {

        this.app.use(cors());

        // Leer y parce del body
        this.app.use(express.json());


        //Diretorio Publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath,require('../routes/user'))
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        })
    }
}

module.exports = Server;