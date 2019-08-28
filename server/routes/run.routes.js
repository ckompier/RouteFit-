
const express = require('express');
const router = express.Router();
const Route = require('../models/Route')
const User = require('../models/User')


router.get('/getAllRoute', (req, res) => {
  Route.find()
      .then(allRoute => res.json(allRoute))
      .catch(err => console.log('Error', err))
})


router.get('/getOneRoute/:id', (req, res) => {
    Route.findById(req.params.id)
        .then(oneRoute => res.json(oneRoute))
        .catch(err => console.log('Error', err))
})

router.post('/saveRoute', (req, res) => {
    console.log('hola')
    // console.log(req.body)
    const {km, travelMode, origin, destination, markers, LatLng, waypoints, userLocation, userId} = req.body
    
    Route.create({
        km, travelMode, origin, destination, markers, LatLng, waypoints, userLocation, user: userId
    })
        .then(theNewRoute => {
            User.findByIdAndUpdate(userId, {$push: {routes: theNewRoute._id}}, {new: true})
            .then(user => {
                console.log(user)
                res.json({theNewRoute, user})
                // res.json(theNewRoute)

            })
        })
        .catch(err => console.log('Error', err))
})

module.exports = router