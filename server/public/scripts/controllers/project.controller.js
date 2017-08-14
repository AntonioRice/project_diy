myApp.controller('ProjectController', ['$http', '$location', 'VehicleService','ProjectService', 'UserService',
function($http, $location, VehicleService, ProjectService, UserService) {
  console.log('ProjectController created');

  var pc = this;

  pc.userService = UserService;

  pc.projectService = ProjectService;

  pc.vehicleService = VehicleService;

  pc.userPackage = ProjectService.userPackage;

  pc.projectService.getProject();

  pc.toggleUpdateProject = function(newProject){
    console.log("clicked");
    pc.editProject = newProject;
    console.log(newProject);
    console.log(newProject);
  }
  pc.cancelUpdate = function(){
    pc.editProject = undefined;
  }
}]); //end of ProjectController
