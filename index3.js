const express = require('express');
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

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
