var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/garage', {
      templateUrl: '/views/templates/garage.html',
      controller: 'VehicleController as vc'
    })
    .when('/projects', {
      templateUrl: '/views/templates/projects.html',
      controller: 'ProjectController as pc'
    })
    .when('/add_vehicle', {
      templateUrl: '/views/templates/add.vehicle.html',
      controller: 'VehicleController as vc'
    })
    .when('/add_project', {
      templateUrl: '/views/templates/add.project.html',
      controller: 'ProjectController as pc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});
