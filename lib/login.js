// import env vars into process.env
require('dotenv').config();

const { AthomCloudAPI } = require('athom-api');
const atob = require('atob');

const cloudAPI = new AthomCloudAPI({
    clientId: process.env.CLIENT_ID || '',
    clientSecret: process.env.CLIENT_SECRET || ''
});
const getToken = "Read here: https://github.com/runely/homey-reader";

module.exports = () => {
    return new Promise(async (resolve, reject) => {
        let token = process.env.TOKEN;
        if (token) {
            token = atob(token);
            token = JSON.parse(token);
            cloudAPI.setToken(token);
        }
        else {
            reject(`Token not present. ${getToken}`);
        }

        cloudAPI.isLoggedIn()
        .then(loggedIn => {
            if (!loggedIn) {
                reject(`Token expired. ${getToken}`);
            }
        })
        .then(() => { return cloudAPI.getAuthenticatedUser() })
        .then(user => { return user.getFirstHomey() })
        .then(homey => { return homey.authenticate() })
        .then(async _homey => {
            
            resolve(_homey);
        })
        .catch(err => reject(err));
    });
}