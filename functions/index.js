const functions = require('firebase-functions');
const Forge = require('./Forge/Forge');
const forge = new Forge();

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.status(200).json({message: 'Hello from Firebase!'});
});

exports.forgeItem = functions.https.onRequest((req, res) => {
  let item = forge.forgeItem();
  let message = {message: 'I made an item!', item: item.jsonify(), readout: item.readOut()};
  res.status(200).json(message);
});