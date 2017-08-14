myApp.controller('NavController', function($http, $location, UserService, VehicleService, ProjectService){
console.log("NavController created");
var nc = this;
nc.userService = UserService;
nc.vehicleService = VehicleService;
nc.projectService = ProjectService;

}); //end of nav controller
