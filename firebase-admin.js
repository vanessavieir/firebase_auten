// firebase-admin.js
const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = require(path.resolve(__dirname, './sua-chave-privada.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sua-aplicacao.firebaseio.com'
});

module.exports = admin;
