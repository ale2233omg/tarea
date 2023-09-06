import express from 'express';
import { router } from './routes.js';
const app = express();

const films = [
  { title: 'El Padrino', director: 'Francis Ford Coppola', year: 1972 },
  { title: 'El Señor de los Anillos', director: 'Peter Jackson', year: 2001 },
  { title: 'Star Wars', director: 'George Lucas', year: 1977 },
];

app.get('/films/:title', (req, res) => {
  const title = req.params.title;
  const film = films.find(p => p.title == title);

  if (film) {
    res.send(film);
  } else {
    res.status(404).send('Película no encontrada');
  }
});

app.get('/users/:userId', (req, res) => {
  if(req.params.userId === '1') {
    res.send({
       id: 1, name: 'pepe', lastname: 'perez' })
  } else {
    res.status(404).send('User not found')
  }
});

app.use('/', router)

app.listen(3000, () => {
  console.log('server ATR')
})
