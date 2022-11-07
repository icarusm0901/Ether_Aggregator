const { connect } = require('mongoose');
const {
  addEventListener: addEventListenerForOpenSea,
} = require('./ether/opensea');
const { addEventListener: addEventListenerForX2Y2 } = require('./ether/x2y2');
const {
  addEventListener: addEventListenerForBlur,
} = require('./ether/blur.io');
const {
  addEventListener: addEventListenerForLooksrare,
} = require('./ether/looksrare');
const getWalletValue = require('./ether/getWalletValue');

const MONGODB_CONNECTION_STRING = 'mongodb://0.0.0.0:27017/test';

(async () => {
  await connect(MONGODB_CONNECTION_STRING);

  addEventListenerForOpenSea();
  addEventListenerForX2Y2();
  addEventListenerForBlur();
  addEventListenerForLooksrare();
})();
