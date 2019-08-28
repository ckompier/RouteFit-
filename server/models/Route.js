

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const routeSchema = new Schema({

    km:Number,
    travelMode: String,
    origin:String,
    destination:String,
    markers: [],
    latLng: {},
    waypoints:[],
    userLocation: {},
    user: {type: Schema.Types.ObjectId , ref: 'User'},

}, { timestamps: true })

const Route = mongoose.model('Route', routeSchema)
module.exports = Route


//HAY QUE PLNATEARLO COMO SE VA A GUARDAR CADA RUTA COSAS A TENER EN CUENTA ----