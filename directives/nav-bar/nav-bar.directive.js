'use strict';

angular.module('demoApp')
  .controller('NavigationController', ['Auth', '$state', function(Auth, $state) {
      var vm = this;
      vm.logout = function() {
        Auth.logout();
        $state.go('login');
      };
  }])
  .directive('navBar', function () {
    return {
      restrict: 'E',
      controller: 'NavigationController',
      controllerAs: 'vm',
      templateUrl: 'directives/nav-bar/nav-bar.html'
    };
  });
