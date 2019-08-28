const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String, //{type:String, required: true},
    password: String, //{type:String, required: true},
    weight: Number, //{type:Number, required: true},
    height: Number, //{type:Number, required: true},
    imageUrl:String, //{type:String, required: true}
    // historic: [],
    // km: Number,
    // calories: Number,
    routes:[{type:Schema.Types.ObjectId, ref:'Route'}]
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)
module.exports = User



//formulas Correr moderado (a 7,5 Km/h)------------------------------------0,200 --  
//