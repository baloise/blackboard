const express = require('express');
const api = require('./api');

const app = express();
global.config = require('../env.json')[process.env.NODE_ENV || 'development'];

api.registerEndpoints(app);

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${server.address().port}`);
});