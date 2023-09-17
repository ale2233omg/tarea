import express from 'express';
import { router } from './routes.js';
import jwt from 'jsonwebtoken';
import { secretKey } from './config.js';

const app = express();

app.use('/', router);

app.listen(3000, () => {
  console.log('server ATR');
});

// Función para crear un token JWT
const createToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

// Función para verificar y decodificar un token JWT
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido');
  }
};

export { createToken, verifyToken };
