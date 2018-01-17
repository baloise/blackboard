const fetch = require('node-fetch');
const getEntries = () => {
    config = require('../../env.json')[process.env.NODE_ENV || 'dev'];
    return fetch(`${config.DB_URL}/entry`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
      .catch(err => console.log(err));
};

const getEntry = (id) => {
    config = require('../../env.json')[process.env.NODE_ENV || 'dev'];
    return fetch(`${config.DB_URL}/entry/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
        .catch(err => console.log(err));
};

module.exports = {
    registerEndpoints(app) {
        app.get('/api/entry', (req, res) =>
            getEntries()
                .then(entries => res.json(entries))
                .catch((err) => {
                    Logger.error(err);
                    res.sendStatus(500).send('Fetching entries failed!');
                })
        );
        app.get('/api/entry/:id', (req, res) =>
            getEntry(req.params.id)
                .then(entries => res.json(entries))
                .catch((err) => {
                    Logger.error(err);
                    res.sendStatus(500).send('Fetching entries failed!');
                })
        );
    },
    getEntries,
    getEntry
};