const parse = require('./homey-object-parser');

module.exports = async (api) => {
    return new Promise(async (resolve, reject) => {
        await api.devices.getDevices()
            .then(devices => resolve(parse(devices)))
            .catch(err => reject(err));
    });
}