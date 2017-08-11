myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var uc = this;
  uc.userService = UserService;
  uc.userPackage = UserService.userPackage;

});
