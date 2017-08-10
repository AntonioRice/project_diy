myApp.factory('UserService', function($http, $location){
  console.log('UserService Loaded');

  var userPackage = {};
  var newVehicle = {};

  return {
    userPackage : userPackage,
    // userGarage : userGarage,
    newVehicle : newVehicle,
    //userPackage data
    getuser : function(){
      console.log('UserService -- getuser');
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userPackage.userName = response.data.username;
              console.log('UserService -- getuser -- User Data: ', userPackage.userName);
          } else {
              console.log('UserService -- getuser -- failure');
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      },function(response){
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },

    logout : function() {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function(response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    },
    //end of userPackage data

    //garage information

  //ability to get vehicle
    getVehicle : function(){
      $http.get('/vehicle').then(function(response){
      //  console.log(response.data);
        userPackage.vehicle = response.data;
        console.log(userPackage.vehicle);
      });
    },

  //ability to add vehicle to garage
    addVehicle : function(){
      $http.post('/vehicle', newVehicle)
      .then(function(response){
        console.log('vehicle added', response);
        });
    },
  //delete vehicle from garage
    deleteVehicle : function(id){
      $http.delete('/vehicle/' + id)
      .then(function(response){
      console.log('vehicle deleted', id);
      });
    },

    updateVehicle : function(id){

      $http.put('/vehicle/' + id)
      .then(function(response){
      console.log('updated', id);
      });
    }

  }; //end of return

}); //end of factory
