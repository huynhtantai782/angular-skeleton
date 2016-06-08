'use strict';

angular.module('JobControllers')
    .controller('JobThumbnailController', ['$scope', '$resource', 'UpfileService',
    	function( $scope, $resource, UpfileService) {


    $scope.newImage = {};

    $scope.submit = function() {
        UpfileService.save($scope.newImage, function(result) {
            if (result.status != 'OK')
                throw result.status;
        });
    }
}])
.factory('UpfileService', ['$resource', function ($resource) {
	var formDataObject = function (data) {
		var fd = new FormData();
        angular.forEach(data, function(value, key) {
            fd.append(key, value);
        });
        return fd;
	}
	return $resource('./images/', {}, {
		save: {
            method: 'POST',
            transformRequest: formDataObject,
            headers: {'Content-Type':undefined, enctype:'multipart/form-data'}
        }
	});
}]);
