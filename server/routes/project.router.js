var express = require('express');
var router = express.Router();
var Project = require('../models/project_schema.js');

//retrieve projects upon page-load
router.get('/:id', function(req, res){
  console.log(req.params.id);
    Project.find({identifier: req.params.id},
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
//ability to add new project to specific vehicle

// URL param is the vehicle id, req.body is the service information
router.post('/:vehicleid', function(req, res){
  console.log('LOGGING THE DATA: ', req.body);
  var vehicleId = req.params.vehicleid;
  req.body.username = req.user.username;
  req.body.identifier = vehicleId;

  var addProject = new Project(req.body);
  // insert into the project collection
  addProject.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
}); //end of post

//ability to update project

//ability to delete project
router.delete('/:id', function(req, res) {
  console.log('delete with id: ', req.params.id);
  Project.findByIdAndRemove(
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

module.exports = router;
