const express = require('express');
const admin = require('./firebase-admin');

const app = express();
const port = 3000;

const isAuthenticated = async (req, res, next) => {
  const idToken = req.headers.authorization;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};

app.get('/restrito', isAuthenticated, (req, res) => {
  res.send(`Bem-vindo, ${req.user.name}!`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
