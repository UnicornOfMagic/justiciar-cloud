const functions = require('firebase-functions');
const Forge = require('./Forge/Forge');
const forge = new Forge();

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.status(200).json({message: 'Hello from Firebase!'});
});

exports.forgeItem = functions.https.onRequest((req, res) => {
  let message = {message: 'I made an item!', item: forge.forgeItem().jsonify()};
  res.status(200).json(message);
});