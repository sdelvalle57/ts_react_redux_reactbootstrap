const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const cors = require('cors');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const ws = dev ? "http://localhost:3001":"http://13.54.62.219";

// const host = dev? 'localhost': process.env.IPFS_HOST;
// const dbName = dev? 'localhost_beefledger1': process.env.IPFS_DB;

// const ipfs = IpfsClient({ host, port: '5001', protocol: 'http', timeout: 10000 });

module.exports = {
    configServer: function (handle) {
        const server = express();
        server.use(helmet());
        server.set('trust proxy', 1);
        server.use(bodyParser.json());
        //server.use(Busboy({immediate: true, limits: {fileSize: 25 * 1024 * 1024}}));
        server.use(cors({ origin: true }));
        

        server.use((req, res, next) => {
            next();
        });


        server.get('*', (req, res) => handle(req, res));
        return server;



    }
}


