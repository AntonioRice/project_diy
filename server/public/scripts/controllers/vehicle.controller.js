myApp.controller('VehicleController', ['$http', 'UserService', function($http, UserService) {
  console.log('VehicleController created');

  var vc = this;
  vc.userService = UserService;

  vc.userPackage = UserService.userPackage;

  // console.log(vc.userService);
  vc.userService.getVehicle();



}]); //end of controller
