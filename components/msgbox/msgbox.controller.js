'use strict';

angular.module('EQO_App')

	.controller('MsgBoxController', function ($scope, $uibModalInstance, Constant, items) {
		var vm = $scope;
		vm.title = items.title;
		switch (items.btnType) {
			case Constant.msgBox.YES_NO:
				vm.yes = true;
				vm.no = true;
				break;
			case Constant.msgBox.OK_CANCEL:
				vm.ok = true;
				vm.cancel = true;
				break;
			case Constant.msgBox.YES_NO_CANCEL:
				vm.yes = true;
				vm.no = true;
				vm.cancel = true;
				break;
			case Constant.msgBox.OK:
				vm.ok = true;
				break;
			default: 
				vm.ok = true;
		}
		switch (items.msgType) {
			case Constant.msgBox.INFO:
				vm.imgSrc = "assets/info.ico";
		}
		
		$scope.onOK = function () {
			debugger;
			$uibModalInstance.close(Constant.msgBox.OK);
		};

		$scope.onCancel = function () {
			$uibModalInstance.dismiss(Constant.msgBox.CANCEL);
		};

		$scope.onYes = function () {
			$uibModalInstance.close(Constant.msgBox.YES);
		};

		$scope.onNo = function () {
			$uibModalInstance.close(Constant.msgBox.NO);
		};
	});
