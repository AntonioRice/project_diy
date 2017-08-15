console.log('vehicle router working');
var express = require('express');
var router = express.Router();
var Vehicle = require('../models/vehicle_schema.js');


//retrieve vehicles from database to display to dom
router.get('/', function(req, res){
  console.log(req.user.username)
  Vehicle.find({username: req.user.username},
    function(err, data) {
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
    req.body.username = req.user.username;
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

  router.delete('/:id', function(req, res) {
    console.log('delete with id: ', req.params.id);
    Vehicle.findByIdAndRemove(
      { _id: req.params.id }, // finding the item
      function(err, data) {
        if(err) {
          console.log('remove error: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      })
    }); //end of delete

    // update feature not functional

    router.put('/:id', function(req, res){
      console.log('Updated data is: ', req.body);
      console.log('Updated Vehicle is: ', req.params);

      Vehicle.findById(req.params.id, function(err, foundVehicle){
        if(err) {
          throw err;
        } else {
          foundVehicle.name = req.body.name || foundVehicle.name;
          foundVehicle.year = req.body.year || foundVehicle.year;
          foundVehicle.make = req.body.make || foundVehicle.make;
          foundVehicle.model = req.body.model || foundVehicle.model;
          foundVehicle.body_style = req.body.body_style || foundVehicle.body_style;
          foundVehicle.mileage = req.body.mileage || foundVehicle.mileage;
          foundVehicle.img = req.body.img || foundVehicle.img;

          foundVehicle.save(function (err) {
            if(err) {
              console.error('ERROR!');
              res.sendStatus(500);
            }else {
              res.sendStatus(200);
            }
          });
        }
      }); // end findOne
    }); // end of PUT Router


    module.exports = router;
