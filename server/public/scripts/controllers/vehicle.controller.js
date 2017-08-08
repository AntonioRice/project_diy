myApp.controller('VehicleController', ['$http', function($http) {
  console.log('VehicleController created');

  var vc = this;
  vc.newVehicle = {};

//ability to get vehicle
  function getVehicle(){
    $http.get('/vehicle').then(function(response){
      console.log(response.data);
      vc.vehicle = response.data;
    });
  }

//ability to add vehicle to garage
  vc.addVehicle = function(){
    $http.post('/vehicle', vc.newVehicle)
    .then(function(response){
      console.log('vehicle added', response);
      getVehicle(); //refresh
      });
  }


}]); //end of controller
