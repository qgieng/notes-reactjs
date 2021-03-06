const mongoose = require(
    'mongoose'
);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const UniqueValidator = require('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
  username: {
    type:String,
    unique:true},
  name: String,
  passwordHash: String,
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note'
    }
  ],
})

userSchema.plugin(UniqueValidator);

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })

const User = mongoose.model('User', userSchema)

module.exports = User;
