import express from 'express';
import { router } from './routes.js';

const app = express();

app.use('/', router);

app.listen(3000, () => {
  console.log('La aplicación está escuchando en el puerto 3000');
});
