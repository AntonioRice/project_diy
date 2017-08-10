myApp.factory('ProjectService', function($http, $location){
  console.log('ProjectService Loaded');

  var userPackage = {};
  var newProject = {};

  return {
    userPackage : userPackage,
    newProject : newProject,

    //get project
    getProject : function(){
      $http.get('/project').then(function(response){
        console.log(response.data);
        userPackage.project = response.data;
      });
    },

    //add project
    addProject : function(){
      $http.post('/project', newProject)
      .then(function(response){
        console.log('project added', response);
        // getProject(); //refresh
      });
    },

    //delete project
    deleteProject : function(id){
      $http.delete('/project/' + id)
      .then(function(response){
        console.log('project deleted', id);
        // getProject();
      });
    }
  }; //end of return

}); //end of factory
