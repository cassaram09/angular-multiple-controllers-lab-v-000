function ContactController() {
  var vm = this;
  this.changeName = function(){
    vm.name = 'Something else!'
  }

  vm.name = "name";
  vm.email ="email"; 
  vm.phone = "phone";
}

angular
  .module('app')
  .controller('ContactController', ContactController)