myApp.controller('ProjectController', ['$http','$routeParams', '$location', 'ProjectService', 'VehicleService', 'UserService',
function($http, $routeParams, $location, ProjectService, VehicleService, UserService) {
  console.log('ProjectController created');

  var pc = this;
  var serviceDueIn;

  pc.inputMileage;

  pc.userService = UserService;

  pc.projectService = ProjectService;

  pc.vehicleService = VehicleService;

  pc.userPackage = ProjectService.userPackage;


  console.log(pc.projectService.userPackage);
  console.log(pc.projectService.userPackage.project);


  // console.log(selectedVehicleId);
  var pathObject = $routeParams;

  var pathId = pathObject.selectedVehicleId;
  console.log(pathId);
  console.log(pathObject.selectedVehicleId);

  pc.projectService.getProject(pathId);


  pc.toggleUpdateProject = function(newProject){
    console.log("clicked");
    pc.editProject = newProject;
    console.log(newProject);
    console.log(newProject._id);
  }
  pc.cancelUpdate = function(){
    pc.editProject = undefined;
  }
  pc.gotoAddProjectForm = function(){
    $location.path('/add_project');
  }
  pc.gotoGarage = function(){
    $location.path('/garage');

  }
  // pc.cancelAdd = function(){
  //   $location.path('/projects');
  // }

  // pc.cancelNewProject = function(){
  //   $location.path('/projects/'+ pathId);
  // }

  //variable inside of add_project that acts as a due date/mileage (add to schema)
  //add input field for inputMileage
  //add button to run function
  //function then takes inputMileage, and subtracts it from dueMileage
  // sweet alert, service due in xxx miles.

    pc.calculateService = function(data){
      serviceDueIn = data.dueMileage - pc.inputMileage;
      console.log(pc.inputMileage);
      console.log(data.mileage);
      console.log(serviceDueIn);
      if (pc.inputMileage > data.dueMileage) {
        swal("Service Past Due: " + serviceDueIn + " miles", "Due: "+ data.dueMileage);
      }else {
        swal("Service Due in: " + serviceDueIn + " miles", "Due: "+ data.dueMileage);
      }

    }




}]); //end of ProjectController
