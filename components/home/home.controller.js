'use strict';

angular.module('demoApp')
  .controller('HomeCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl',
      onClick: function () {
  		var msgBox = $uibModal.open( {
			templateUrl: 'components/msgbox/msgbox.html',
			controller: 'MsgBoxController',
			animation: true,
            size: 'sm',
            // send data to MsgBoxController
            resolve: {
              	items: function() {
                    return {
                    	title: "Loi",
                    	msgType: "INFO",
                    	message: "LOI HE THONG",
                    	btnType: "YESNO"
                    };
              	}
            }
		});
		msgBox.result.then(function () {
			debugger;
		});
      },
    });

  });
