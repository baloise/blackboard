const express = require('express');
const api = require('./api');

const app = express();

api.registerEndpoints(app);

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${server.address().port}`);
});