myApp.controller('ProjectController', ['$http', '$location', 'VehicleService','ProjectService', 'UserService',
function($http, $location, VehicleService, ProjectService, UserService) {
  console.log('ProjectController created');

  var pc = this;
  var serviceDueIn;

  pc.inputMileage;

  pc.userService = UserService;

  pc.projectService = ProjectService;

  pc.vehicleService = VehicleService;

  pc.userPackage = ProjectService.userPackage;

  pc.projectService.getProject();
  

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
        swal("Service Past: " + serviceDueIn + " miles", "Due: "+ data.dueMileage);
      }else {
        swal("Service Due in: " + serviceDueIn + " miles", "Due: "+ data.dueMileage);
      }

    }




}]); //end of ProjectController
