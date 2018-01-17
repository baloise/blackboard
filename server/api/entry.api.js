const fetch = require('node-fetch');
const getEntries = () => {
    return fetch(`${config.DB_URL}/entries`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
      .catch(err => console.log(err));
};

module.exports = {
    registerEndpoints(app) {
        app.get('/api/entries', (req, res) =>
            getEntries()
                .then(entries => res.json(entries))
                .catch((err) => {
                    Logger.error(err);
                    res.sendStatus(500).send('Fetching entries failed!');
                })
        );
    },
    getEntries
};