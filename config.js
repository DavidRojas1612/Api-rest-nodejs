/*global someFunction module:true*/
/*global someFunction process:true*/
/*eslint no-undef: "error"*/


module.exports= {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
  SECRET_TOKEN: 'miclavedetokens'
};