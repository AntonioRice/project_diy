myApp.controller('VehicleController', ['$http', function($http) {
  console.log('VehicleController created');

  var vc = this;
  vc.newVehicle = {};
  getVehicle();

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

  vc.deleteVehicle = function(id){
    $http.delete('/vehicle/' + id)
    .then(function(response){
    console.log('vehicle deleted', id);
    getVehicle();
    });
  }

  vc.updateVehicle = function(id){
    
    $http.put('/vehicle/' + id)
    .then(function(response){
    console.log('updated', id);
    getVehicle();
    });
  }
}]); //end of controller
