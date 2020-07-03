const { HomeyAPI } = require('athom-api');
const connectToHomey = require('./lib/login');
const getVariables = require('./lib/homey-variables');
const getAppSettings = require('./lib/homey-appSettings');
const getDevices = require('./lib/homey-devices');

connectToHomey()
    .then(async api => {
        console.log(`We are connected to: ${api._apis.ManagerSystem._baseUrl}\n`);

        /* ########################### VARIABLES ############################ */
        let variables = await getVariables(api);
        // console.log(variables); // get all properties for the variables
        variables.map(variable => console.log({
            name: variable.name,
            value: variable.value
        }));

        /* ########################### DEVICES ############################ */
        let devices = await getDevices(api);
        // console.log(devices); // get all properties for the devices
        devices.map(device => console.log({
            id: device.id,
            name: device.name
        }));

        /* ########################### APP_SETTINGS ############################ */
        //let appSettings = await getAppSettings(api) // get appSettings for all apps and not just Countdown
        let appSettings = await getAppSettings(api, 'nl.bevlogenheid.countdown')
        console.log(appSettings);
    })
    .catch(err => console.error(err));