myApp.factory('ProjectService', function($http, $location, $window){
  console.log('ProjectService Loaded');

  var userPackage = {};
  var newProject = {};
  var selectedVehicle = {};
  var editProject = {};


  return {
    userPackage : userPackage,
    newProject : newProject,
    selectedVehicle: selectedVehicle,
    editProject : editProject,

    //get project
    getProject : function(){
      $http.get('/project/' + selectedVehicle.id).then(function(response){
        console.log(response.data);
        userPackage.project = response.data;
      });
    },

    //add project
    addProject : function(){
      //selectedVehicleid was set by vehicle controller
      console.log('addProject to vehicle with id', selectedVehicle.id)
      $http.post('/project/' + selectedVehicle.id , newProject)
      .then(function(response){
        $location.path('/projects');
        console.log('project added', response);
      });
      $window.location.reload();

    },

    // updating project
    updatingProject : function(id){
      console.log(id);
      $http.put('/project/' + id, editProject)
      .then(function(response){
        console.log('project updated', id);
      });
      $window.location.reload();
    },

    //delete project
    deleteProject : function(id){
      $http.delete('/project/' + id)
      .then(function(response){
        console.log('project deleted', id);
      });
      $window.location.reload();
    }
  }; //end of return

}); //end of factory
