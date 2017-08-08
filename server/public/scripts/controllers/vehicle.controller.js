myApp.controller('VehicleController', function($http) {
  console.log('VehicleController created');
  var vc = this;

//ability to get vehicle
function getVehicles(){
  $http.get('/vehicles').then(function(response){
    console.log(response.data);
    vc.vehicles = response.data;
  });
}

//ability to add vehicle to garage
vc.addVehicles = function(){

  $http.post('/vehicles', vc.newVehicle)
  .then(function(response){
  console.log('listing added', response);
  getVehicles(); //refresh
    });
}


}); //end of controller
