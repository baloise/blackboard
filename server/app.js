const express = require('express');
const app = express();
const fetch = require('node-fetch');
const baseUrl = 'http://localhost:8983/solr';
const collection = 'test';

const server = app.listen(process.env.PORT || 3000, () => {
    fetch(`${baseUrl}/${collection}/select?q=*:*`)
        .then(res => res.json())
        .then(res => console.log(res.response.docs));

    console.log(`Listening on port ${server.address().port}`);
});