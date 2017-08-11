myApp.factory('ProjectService', function($http, $location, UserService){
  console.log('ProjectService Loaded');


  console.log(UserService.idArray);

  var userPackage = {};
  var newProject = {};
  var selectedVehicle = {};


  return {
    userPackage : userPackage,
    newProject : newProject,
    selectedVehicle: selectedVehicle,

    //get project
    getProject : function(id){
      $http.get('/project/' + id).then(function(response){
        console.log(response.data);
        userPackage.project = response.data;
      });
    },

    //add project
    addProject : function(){
      //selectedVehicleid was set buy vehicle controller
      console.log('addProject to vehicle with id', selectedVehicle.id)
      $http.post('/project/' + selectedVehicle.id , newProject)
      .then(function(response){
        console.log('project added', response);
        // getProject(); //refresh
      });
    },

    //delete project
    deleteProject : function(id){
      $http.delete('/project/' + id)
      .then(function(response){
        console.log('project deleted', id);
        // getProject();
      });
    }
  }; //end of return

}); //end of factory
