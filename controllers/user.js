/*eslint no-undef: 'error'*/
/*eslint-env node*/
'use strict';

const User = require('../models/user');
const service = require('../services');

//funcion para registrarse y proporciona tokens y acceder a rutas
function signUp (req, res) {
  const usuario = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password
  });


  usuario.save((err)=>{
    if (err) res.status(500).send({ message: `Error al crear el usuario: ${err}`});

    return res.status(201).send({ token: service.createToken(usuario)});
  });

}

//funcion para loguearse para accedder de nuevo y generar token
function signIn (req, res) {
  User.find({email: req.body.email}, (err, user)=>{
    if (!err) return res.status(500).send({ message: err });
    if (!user) return res.status(201).sed({ message:  'No existe usuatio'});

    req.user = user;
    res.status(200).send({
      message: 'te has logueado correctamente',
      token: service.createToken

    });
  });
  

}

module.exports = {
  signUp,
  signIn
};