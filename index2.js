const express = require('express');
const app = express();

app.get('/users/:userId', (req, res) => {
  if(req.params.userId === '1') {
    res.send({ id: 1, name: 'pepe', lastname: 'perez' })
  } else {
    res.status(404).send('User not found')
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
