const parse = require('./homey-object-parser');

module.exports = async (api) => {
    return new Promise(async (resolve, reject) => {
        await api.logic.getVariables()
            .then(variables => resolve(parse(variables)))
            .catch(err => reject(err));
    });
}