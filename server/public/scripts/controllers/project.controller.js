myApp.controller('ProjectController', ['$http','$routeParams', '$location', 'ProjectService',
'VehicleService', 'UserService',
function($http, $routeParams, $location, ProjectService, VehicleService, UserService) {
  console.log('ProjectController created');

  var pc = this;
  var serviceDueIn;
  var serviceDue;

  pc.inputMileage;

  pc.userService = UserService;

  pc.projectService = ProjectService;

  pc.vehicleService = VehicleService;

  pc.userPackage = ProjectService.userPackage;

  var pathObject = $routeParams;
  var pathId = pathObject.selectedVehicleId;
  console.log(pathId);
  console.log(pathObject.selectedVehicleId);
  pc.projectService.getProject(pathId);


  pc.client = filestack.init('ACi1b2g3QwqxdEHwqeJMCz');
  pc.showPicker = function() {
    pc.client.pick({
      }).then(function(result) {
        pc.projectService.newProject.img = result.filesUploaded[0].url;
        console.log(JSON.stringify(result.filesUploaded));
        console.log(pc.projectService.newProject.img);
        swal("Image Successfully Uploaded");
      });
  }
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


    pc.calculateService = function(item, $index){

      console.log(item);

      serviceDue = item.mileage + item.dueMileage;
      serviceDueIn = serviceDue - pc.inputMileage[$index];
      console.log(serviceDueIn);

       if (pc.inputMileage[$index] > serviceDue) {

      swal("Service Past Due: " + serviceDueIn + " miles ", "Due: " + serviceDue);
    }else if(pc.inputMileage[$index] < item.mileage){
      swal("Not Possible, Double check your Mileage");

    }else {
     swal("Service Due in: " + serviceDueIn + " miles", "Due: " + serviceDue);
     }

   } //end of pc.calculateService

   // savings calculations
   pc.calcSavings = function(item, $index){

    console.log(item);

    savings = item.quote - item.cost;
    console.log(savings);

    swal(savings);

   }






}]); //end of ProjectController
