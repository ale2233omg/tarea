import express from 'express';
import { router } from './routes.js';
import jwt from 'jsonwebtoken';
import { secretKey } from './config.js';

const app = express();

app.use('/', router);
app.post("/api/login" , (req , res) =>{
  const user = {
    id: 1,
    nombre : "Hendry",
    correo : "gmail" ,

  }
  jwt.sign({user }, 'secretkey', (err, token) =>{
    res.json ({
      token
    })
  })
 
});

app.post("/api/post" , verifyToken ,(req , res) =>{

jwt.verify(req.token, 'secretkey', (error, authData)=>{
  if(error){
    res.sendStatus(403)
  }else{
    res.json(
      {
        mensjae: "post fue creado",
       authData 
      }
    )
  }
})
});

function verifyToken (req, res, next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearerToken = bearerHeader.split(" ")[1];

    req.token = bearerToken;
    next();
  }
  else{
    res.sendStatus(403);
  }
}
app.listen(3000, () => {
  console.log('server ATR');
});

// Función para crear un token JWT



