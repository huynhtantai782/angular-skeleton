'use strict';

angular.module('EQO_App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'components/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      });
  });
