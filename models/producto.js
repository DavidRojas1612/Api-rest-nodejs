/*eslint no-undef: 'error'*/
/*eslint-env node*/

'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//esquema de la tabla de la base de datos
var ProductoSchema = Schema({

  nombre: String,
  imagen: String,
  precio: {type: Number, default: 8},
  category: {type: String, enum: ['computers', 'phones', 'accesorios']},
  descripcion: String
});

module.exports = mongoose.model('Producto',ProductoSchema);