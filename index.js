/*eslint no-undef: 'error'*/
/*eslint-env node*/
'use strict';
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = require('./app');
const config = require('./config');


// Conexcion base de datos
mongoose.connect(config.db,{useMongoClient: true},function(err){
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  }
  console.log('Conexcion a la base de datos establecida...');
  
  app.listen(config.port,()=>{
    console.log(`API REST corriendo en http://localhost:${port}`);

  });
});

