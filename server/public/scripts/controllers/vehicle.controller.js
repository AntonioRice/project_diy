//Order matters. Included [] for minification in future.
myApp.controller('VehicleController', ['$http', '$location', 'VehicleService', 'ProjectService', 'UserService',
function($http, $location, VehicleService, ProjectService, UserService) {
  console.log('VehicleController created');

  var vc = this;
  //ability to use returned items in UserService
  vc.userService = UserService;
  //ability to use returned items in VehicleService
  vc.vehicleService = VehicleService;
  //ability to use returned items in ProjectService
  vc.projectService = ProjectService;

  vc.userPackage = VehicleService.userPackage;
  //appending vehicles to dom upon pageload
  vc.vehicleService.getVehicle();

//this is being called in garage.html with (item._id //which is the vehicle id)
  vc.gotoProjectsFor = function(selectedVehicleId) {
    vc.projectService.selectedVehicle.id = selectedVehicleId;
    //being redirected to the project page, when button is clicked.
    $location.path('/projects');
  }

}]); //end of controller
