/*eslint no-undef: 'error'*/
/*eslint-env node*/
'use stric';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const UserSchema = new Schema ({

  email: {type: String, unique: true, lowercase: true},
  displayName: String,
  avatar: String,
  password: {type: String,  select: false},
  signupDate: {type: Date, default: Date.now},
  lastLogin: Date
});

UserSchema.pre('save', function(next) {
  let user = this;
  //if (!user.isModified('password')) return next();
  

  bcrypt.genSalt(10,(err, salt)=>{
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash)=>{
      if (err) return next(err);

      user.password = hash;
      next();
      
    });
  });
});


UserSchema.methods.gravatar = function(){
  if (!this.email) return 'https://gravatar.com/avartar/?s=200&d=retro';

  // md5 es una funcion has que el que pone por defecto gravatar en el url de los avatares
  const md5 = crypto.createHash('mds').update(this.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?=200&d=retro`;
};

module.exports = mongoose.model('User', UserSchema);