const express = require('express');
const router = express.Router();

const setRoutes = (app) => {
    router.get('/', (req, res) => {
        res.send('Bienvenido a la API de Express');
    });

    // Aquí puedes agregar más rutas según sea necesario

    app.use('/api', router);
};

module.exports = setRoutes;