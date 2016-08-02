function StaffController() {
  this.name = "name!!";
  this.email = "email";
  this.phone = "phone";
}

angular
  .module('app')
  .controller('StaffController', StaffController)