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
  console.log('Updated data is: ', req.params);

  Vehicle.findByIdAndUpdate(
    {_id: req.params.id},
    {$set:
      {year: req.body.year,
       make: req.body.make,
       model: req.body.model,
       body_style: req.body.body_style,
       mileage: req.body.mileage}
    },
    function(err, data){
      if(err){
        console.log('update error: ', err);
      } else {
        res.sendStatus(200);
      }
    }
  );
}); // end of PUT Router


module.exports = router;
