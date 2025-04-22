const express = require('express');

const setRoutes = (app) => {

    const router = express.Router();

    router.get('/', (req, res) => {
        res.send('Bienvenido a la API de Express');
    });

    // Aquí puedes agregar más rutas según sea necesario

    app.use('/', router);
};

module.exports = { setRoutes };