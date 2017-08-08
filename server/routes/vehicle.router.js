var express = require('express');
var router = express.Router();
var path = require('path');
// var passport = require('passport');
// var Project = require('../models/project_schema.js');
var Vehicle = require('../models/vehicle_schema.js');


//retrieve vehicles from database to display to dom
router.get('/vehicle', function(req, res){
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
router.post('/vehicle', function(req, res){
  console.log('log the data: ', req.body);
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
