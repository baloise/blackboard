const fetch = require('node-fetch');

const baseUrl = 'http://localhost:8983/solr';
const collection = 'Blackboard';

const addMockData = () => {
    return updateCollection(require('./mock/db').entry);
};

const updateCollection = (data) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
    };
    return fetch(`${baseUrl}/${collection}/update?commitWithin=1000&overwrite=true`, options)
        .then(res => res.json())
        .catch(error => console.error(error));
};

const deleteAllDocuments = () => {
    const options = {
        method: 'POST',
        body: JSON.stringify({delete: {query: "*:*"}, commit: {}}),
        headers: {'Content-Type': 'application/json'},
    };
    return fetch(`${baseUrl}/${collection}/update?commitWithin=1000&overwrite=true`, options)
        .then(res => res.json())
        .catch(error => console.error(error));
};

deleteAllDocuments().then(() =>
    addMockData().then(() => console.log('Mock data successfully inserted'))
);

