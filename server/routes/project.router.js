var express = require('express');
var router = express.Router();
var Project = require('../models/project_schema.js');

//retrieve projects upon page-load
router.get('/project', function(req, res){
  Project.find({}, function(err, data) {
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

router.post('/project', function(req, res){
  console.log('log the data: ', req.body);
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

module.exports = router;
