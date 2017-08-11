myApp.factory('VehicleService', function($http, $location, UserService){
  console.log('VehicleService Loaded');

  var userPackage = {};
  var newVehicle = {};

  return {
    userPackage : userPackage,
    newVehicle : newVehicle,

    //garage information, move to own service

    //ability to get vehicle

    getVehicle : function(){
      $http.get('/vehicle').then(function(response){
       console.log(response.data);
       userPackage.vehicle = response.data;
      });
    },

  //ability to add vehicle to garage
    addVehicle : function(){
      $http.post('/vehicle', newVehicle)
      .then(function(response){
        $location.path('/garage');
        console.log('vehicle added', response);
        });
    },

  //delete vehicle from garage
    deleteVehicle : function(id){
      $http.delete('/vehicle/' + id)
      .then(function(response){
      console.log('vehicle deleted', id);
      });
  $location.path('/garage');
    },

  //update vehicle information
    updateVehicle : function(id){
      $http.put('/vehicle/' + id)
      .then(function(response){
      console.log('updated', id);
      });
    }

  }; //end of return

}); //end of factory
