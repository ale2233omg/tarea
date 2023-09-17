const config = require('./config'); 
const mysql = require('mysql2');
const { createToken } = require('./jwtUtils'); // Importa las funciones para crear tokens JWT

// Configura la conexión a la base de datos
const db = mysql.createConnection(config.database);

// Endpoint para autenticar y crear sesión
const createSession = (req, res) => {
  const { email, password } = req.body;

  // Consulta SQL para buscar un usuario por email y contraseña
  const query = 'SELECT id FROM User WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error en la base de datos' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Crear un token JWT con el ID del usuario
    const token = createToken({ userId: results[0].id });

    res.json({ token });
  });
};

// Endpoint para obtener información de usuario autenticado
const getUser = (req, res) => {
  // El usuario se encuentra en req.user después de la autenticación del middleware
  const { userId } = req.user;

  // Consulta SQL para obtener la información del usuario por ID
  const query = 'SELECT * FROM User WHERE id = ?';

  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error en la base de datos' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(results[0]);
  });
};

module.exports = { createSession, getUser };
