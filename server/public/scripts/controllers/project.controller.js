myApp.controller('ProjectController', function($http) {
  console.log('ProjectController created');

  var pc = this;
  pc.newProject= {};
  getProject();

//get project
  function getProject(){
    $http.get('/project').then(function(response){
      console.log(response.data);
      pc.project = response.data;
    });
  }

//add project
  pc.addProject = function(){
    $http.post('/project', pc.newProject)
    .then(function(response){
      console.log('project added', response);
      getProject(); //refresh
      });
  }

//delete project
  pc.deleteProject = function(id){
    $http.delete('/project/' + id)
    .then(function(response){
    console.log('project deleted', id);
    getProject();
    });
  }

});
