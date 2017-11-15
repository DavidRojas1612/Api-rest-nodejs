/*eslint no-undef: 'error'*/
/*eslint-env node*/
var express = require('express');
const ProductoControl = require('../controllers/productos.js');
const auth = require('../middlewares/auth.js');
const UserControl = require('../controllers/user');
var api = express.Router();



//peticion get-obtener de la pagina para mostrar todos los productos 
api.get ('/product',ProductoControl.getProductos);

//peticion get-obtener de la pagina para mostrar un producto por id
api.get('/product/:productoid',ProductoControl.getProducto);

//peticion para enviar a datos desde la pagina a la base
api.post('/product', auth,ProductoControl.insertProducto);

//actualizar en la base de datos por peticion web
api.put('/product/:productoid', auth,ProductoControl.UpdateProducto); 

//borrar en la base de datos por peticion web
api.delete('/product/:productoid', auth,ProductoControl.deleteProducto);

//para crear nuevo usuario y token
api.post('/signUp', UserControl.signUp);

//para loguearse y proporcionar un token de seguridad
api.post('/signIn', UserControl.signIn);

api.get('/private', auth, function(req, res){
  res.status(200).send({ message: 'tienes acceso'});
});
module.exports = api;






