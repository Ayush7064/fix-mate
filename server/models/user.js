const mongoose= require("mongoose");
const schema= mongoose.Schema;

const userSchema=  new schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    location: {
    city: {
      type: String,
      required: true,
      trim: true,
    },
    pin: {
      type: String,
      required: true,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: "2dsphere",
    }
  },
  role:{
    type:String,
    enum:['user','admin'],
    default:'user',
  },
   createdAt: {
    type: Date,
    default: Date.now
  }

});


const User = mongoose.model("User",userSchema);

module.exports= User;
