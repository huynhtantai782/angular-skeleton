'use strict';

angular.module('Auth', ['Util'])
  .service('Auth', function ($rootScope, $cookieStore, $q, $http, Constant) {

    var _user = {};
    var _ready = $q.defer();
    if ($cookieStore.get('EQO-token')) {
      $http.get(Constant.serviceURL.USER)
        .then(function (res) {
          _user = res.data;
        })
        .finally(function () {
          _ready.resolve();
        });
    } else {
      _ready.resolve();
    }

    /**
     * Signup
     *
     * @param user
     * @returns {promise}
     */
    this.signup = function (user) {
      var deferred = $q.defer();
      $http.post('/api/users', user)
        .then(function (res) {
          _user = res.data.user;
          $cookieStore.put('EQO-token', res.data.token);
          deferred.resolve();
        })
        .catch(function (err) {
          deferred.reject(err.data);
        });
      return deferred.promise;
    };

    /**
     * Login
     *
     * @param user
     * @returns {promise}
     */
    this.login = function (user) {
      var deferred = $q.defer();
      /*$http.post('/auth/local', user)
        .then(function (res) {
          _user = res.data.user;
          $cookieStore.put('token', res.data.token);
          deferred.resolve();
        })
        .catch(function (err) {
          deferred.reject(err.data);
        });*/
      $http.get(Constant.serviceURL.USER)
        .then(function (res) {
          if(user.username == res.data.username && user.pwd == res.data.pwd) {
            _user = res.data;
            $cookieStore.put('EQO-token', Constant.TOKEN);
            deferred.resolve();
          } else {
            deferred.reject();
          }
        });
      return deferred.promise;
    };

    /**
     * Logout
     */
    this.logout = function () {
      $cookieStore.remove('EQO-token');
      _user = {};
    };

    /**
     * Check if the user is logged
     *
     * @returns {boolean}
     */
    this.isLogged = function () {
      return _user.hasOwnProperty('id');
    };

    /**
     * Check if the user is logged after the ready state
     *
     * @returns {Promise}
     */
    this.isReadyLogged = function () {
      var def = $q.defer();
      _ready.promise.then(function () {
        if (_user.hasOwnProperty('id')) {
          def.resolve();
        } else {
          def.reject();
        }
      });
      return def.promise;
    };

    /**
     * Returns the user
     *
     * @returns {object}
     */
    this.getUser = function () {
      return _user;
    };

  });
