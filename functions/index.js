const functions = require('firebase-functions');
const Forge = require('./Forge/Forge');
const Calculator = require('./Payday/Calculator');
const forge = new Forge();
const calculator = new Calculator();
const cors = require('cors')({origin: false});

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.status(200).json({message: 'Hello from Firebase!'});
});

exports.forgeItem = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let item = forge.forgeItem();
    let message = {message: 'I made an item!', item: item.jsonify(), readout: item.readOut()};
    res.status(200).json(message);
  })
});

exports.payDay = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let now = new Date();
    let nextPayDay = calculator.calculateNextPayDay(now);
    res.status(200).json({message: 'Next PayDay is ' + nextPayDay});
  })
})
