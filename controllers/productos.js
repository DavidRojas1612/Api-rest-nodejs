/*eslint no-undef: 'error'*/
/*eslint-env node*/
'use strict';
const productof = require('../models/producto.js');


function getProducto (req, res) {
  let productoid = req.params.productoid;
  
  productof.findById(productoid,(err, producto)=>{
    if (err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
    if (!producto) return res.status(404).send({message:'el producto no existe'});

    res.status(200).send({ producto });
  });

}

function getProductos (req,res) {
  productof.find({}, (err, products)=>{
    if (err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
    if (!products) return res.status(404).send({message:'No Existen productos'});
    
    
    res.status(200).send({ products });
  });    
    
}

    
function UpdateProducto (req, res) {
  //updateb es una variable con los campos a actualizar optenidos en el cuerpo del esquema
  let productoid = req.params.productoid;
  let UpdateB = req.body;

  productof.findByIdAndUpdate(productoid,UpdateB,(err, productoUpdated)=>{
    if (err) return res.status(500).send({message: `error a actualizar el producto: ${err}`});

    res.status(200).send({producto: productoUpdated});

  });      
        
}
        
function deleteProducto (req, res) {
  let productoid = req.params.productoid;
  
  productof.findById(productoid, (err, producto)=>{
    if (err) return res.send({message: `Error al borrar el producto: ${err}`});
  
  
    producto.remove(err =>{
      if (err) return res.send({message: `Error al borrar el producto: ${err}`});
        
      res.status(200).send({message: 'producto borrado'});
    });
  });

}

function insertProducto (req, res) {
  console.log('POST /api/product');
  console.log(req.body);

  let producto = new productof();

  producto.nombre = req.body.nombre;
  producto.imagen = req.body.imagen;
  producto.precio = req.body.precio;
  producto.category = req.body.category;
  producto.descripcion =  req.body.descripcion;

 
  producto.save(function(err,productStored){
    if (err) res.status(500).send({message: `Error al guarfar en la base de datos: ${err}`});
  
    res.status(200).send({producto: productStored});
  });

}

module.exports = {
  getProducto,
  getProductos,
  UpdateProducto,
  deleteProducto,
  insertProducto
};


            