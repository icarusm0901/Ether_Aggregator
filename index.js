const { connect } = require('mongoose');
const {
  addEventListener: addEventListenerForOpenSea,
} = require('./ether/opensea');
const { addEventListener: addEventListenerForX2Y2 } = require('./ether/x2y2');

const MONGODB_CONNECTION_STRING = 'mongodb://localhost:27017/test';

(async () => {
  await connect(MONGODB_CONNECTION_STRING);
  addEventListenerForOpenSea();
  addEventListenerForX2Y2();
})();
