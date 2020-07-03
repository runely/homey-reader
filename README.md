# homey-reader

Get info about your Homey in the console

# setup

## Environment variables
Create a .env file in the root of the project and copy in this:
```bash
CLIENT_ID=
CLIENT_SECRET=
TOKEN=
```

## Client ID and Client Secret
Log in to https://developer.athom.com/api/projects, copy the Client ID and Client Secret and paste them in the .env file

## Token

The token needs to refreshed every one or two hours

Getting the token:
1. Open https://homey.ink/
1. Open Console (F12) (assumes Chrome)
1. Click 'Log in'
1. After a successfull login a 'Web URL' item should be logged to your console.
1. Copy the value after 'token='
1. Paste token in the .env file in section TOKEN=
1. If the token has a '%3D' at the end, remove it or this will fail!!!"

## Install modules

```bash
npm install
```

# run

```bash
npm start
```