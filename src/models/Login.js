const { Schema, model, connection } = require('mongoose');

const LoginSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },

  codes: [{
    code: {
    type: String,
    ref: 'Login',
    },
    name: {
      type: String,
      ref: 'Login',
    },
  }],
} , { 
  timestamps: true, 
});

module.exports = model('Login', LoginSchema);