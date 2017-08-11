myApp.controller('ProjectController', ['$http', 'ProjectService', function($http, ProjectService) {
  console.log('ProjectController created');

  var pc = this;
  pc.projectService = ProjectService;
  pc.userPackage = ProjectService.userPackage;

  pc.projectService.getProject();



}]); //end of ProjectController
