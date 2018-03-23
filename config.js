/*global someFunction module:true*/
/*global someFunction process:true*/
/*eslint no-undef: "error"*/


module.exports= {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://david:lO4b4oYOasO5X3eX@cluster0-shard-00-00-xfpif.mongodb.net:27017,'+
                              'cluster0-shard-00-01-xfpif.mongodb.net:27017,' +
                              'cluster0-shard-00-02-xfpif.mongodb.net:27017' +
                              '/shop?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  SECRET_TOKEN: 'miclavedetokens'
};
