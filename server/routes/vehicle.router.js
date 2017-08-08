console.log('vehicle router working');
var express = require('express');
var router = express.Router();
var Vehicle = require('../models/vehicle_schema.js');


//retrieve vehicles from database to display to dom
router.get('/', function(req, res){
  Vehicle.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      console.log(data);
    }
  });
}); //end of get

//ability to add new vehicles
router.post('/', function(req, res){
  console.log('sent data: ', req.body);
  var addVehicle = new Vehicle(req.body);
  // insert into the vehicles collection
  addVehicle.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
}); //end of post





module.exports = router;
