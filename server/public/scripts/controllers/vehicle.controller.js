//order matters, both linked in array min. at later date
myApp.controller('VehicleController', ['$http', '$location', 'UserService', 'ProjectService', function($http, $location, UserService, ProjectService) {
  console.log('VehicleController created');

  var vc = this;
  vc.userService = UserService;
  vc.userPackage = UserService.userPackage;
  //appending vehicles to dom upon pageload
  vc.userService.getVehicle();

  vc.projectService = ProjectService;

//this is being called in garage.html with (item._id //which is the vehicle id)
  vc.gotoProjectsFor = function(selectedVehicleId) {
  
    vc.projectService.selectedVehicle.id = selectedVehicleId;
    //being redirected to the project page, in html changed ref to button
    $location.path('/projects');
  }

}]); //end of controller
