myApp.controller('ProjectController', ['$http', '$location', 'VehicleService','ProjectService', 'UserService',
function($http, $location, VehicleService, ProjectService, UserService) {
  console.log('ProjectController created');

  var pc = this;
  pc.projectService = ProjectService;
  pc.vehicleService = VehicleService;
  pc.userPackage = ProjectService.userPackage;

  pc.projectService.getProject();

}]); //end of ProjectController
