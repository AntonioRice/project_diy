myApp.controller('VehicleController', ['$http', '$location','$window', 'VehicleService','ProjectService', 'UserService',
function($http, $location, $window, VehicleService, ProjectService, UserService) {
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
  vc.userService.getuser();

  vc.client = filestack.init('ACi1b2g3QwqxdEHwqeJMCz');
  vc.showPicker = function() {
    vc.client.pick({
      }).then(function(result) {
        vc.vehicleService.newVehicle.img = result.filesUploaded[0].url;
        console.log(JSON.stringify(result.filesUploaded));
        console.log(vc.vehicleService.newVehicle.img);
        swal("Image Successfully Uploaded");
      });
  }

  vc.toggleUpdateVehicle = function(newVehicle){
    console.log("clicked");
    vc.editVehicle = newVehicle;
    console.log(newVehicle);
    console.log(newVehicle._id);
  }
  vc.cancelUpdate = function(){
    vc.editVehicle = undefined;
  }

  vc.gotoAddVehicleFrom = function(){
    $location.path('/add_vehicle');
  }

  vc.gotoGarage = function(){
    $location.path('/garage');
  }
  vc.cancelVehicle = function(){
    $window.location.reload();
    $location.path('/garage');
  }

  vc.stretchGoals = function(){
    swal("HA! WOULD BE NICE RIGHT??");
  }

  vc.logout = function(){
    vc.userService.logout();
  }

//this is being called in garage.html with (item._id //which is the vehicle id)

  // vc.gotoProjectsFor = function(selectedVehicleId) {
  //   vc.projectService.selectedVehicle.id = selectedVehicleId;
  //   //being redirected to the project page, when button is clicked.
  //   $location.path('/projects');
  // }
}]); //end of controller
