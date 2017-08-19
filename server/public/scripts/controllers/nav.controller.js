myApp.controller('NavController', function($http, $location, $mdSidenav, UserService, VehicleService, ProjectService){
console.log("NavController created");

var nc = this;
nc.userService = UserService;
nc.vehicleService = VehicleService;
nc.projectService = ProjectService;

nc.openLeftMenu = function (){
  $mdSidenav('left').toggle();
  
}

}); //end of nav controller
