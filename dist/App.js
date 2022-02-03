import express from 'express';
export class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.send('Nothing to see here');
        });
        this.express.use('/', router);
    }
}
