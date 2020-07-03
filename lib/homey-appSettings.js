const parse = require('./homey-object-parser');

module.exports = async (api, id) => {
    return new Promise(async (resolve, reject) => {
        await api.apps.getAppSettings({ id })
            .then(apps => resolve(apps))
            .catch(err => reject(err));
    });
}