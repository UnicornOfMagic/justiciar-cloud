import Forge from './Forge/Forge';

const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send(Forge.ForgeItem());
});
