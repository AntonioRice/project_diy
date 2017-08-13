myApp.factory('VehicleService', function($http, $location, $window, UserService, ProjectService){
  console.log('VehicleService Loaded');

  var userPackage = {};
  var newVehicle = {};

  return {
    userPackage : userPackage,
    newVehicle : newVehicle,

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
        $window.location.reload();
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
      $window.location.reload();

    },
    
    gotoProjectsFor : function(selectedVehicleId) {
      ProjectService.selectedVehicle.id = selectedVehicleId;
      console.log("ID FOR SELECTED CAR: ", selectedVehicleId);
      //being redirected to the project page, when button is clicked.
      $location.path('/projects');
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
