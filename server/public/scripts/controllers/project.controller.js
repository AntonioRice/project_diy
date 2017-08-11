myApp.controller('ProjectController', ['$http','$location', 'ProjectService', function($http, $location, ProjectService) {
  console.log('ProjectController created');

  var pc = this;
  pc.projectService = ProjectService;
  pc.userPackage = ProjectService.userPackage;

  pc.projectService.getProject();

}]); //end of ProjectController
