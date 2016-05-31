'use strict';

angular.module('demoApp')
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {

    });

    $translateProvider.translations('vn', {

    });
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.preferredLanguage('vn');
});
