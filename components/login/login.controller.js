'use strict';

angular.module('EQO_App')
  .controller('LoginCtrl', function ($location, Auth, $state) {

    var vm = this;

    if (Auth.isLogged()) {
      $state.go('home');
    }

    angular.extend(vm, {

      name: 'LoginCtrl',

      /**
       * User credentials
       */
      user: { email: 'test@test.com', password: 'test' },

      /**
       * Login method
       */
      login: function () {
        Auth.login(vm.user)
          .then(function () {
            $location.path('/');
          })
          .catch(function (err) {
            vm.error = err;
          });
      }

    });

  });
