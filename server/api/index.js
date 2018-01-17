const entryApi = require('./entry.api');

module.exports = {
    registerEndpoints(app) {
        entryApi.registerEndpoints(app);
    }
};