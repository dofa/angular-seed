'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
	  $scope.alerts = [
	    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
	    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
	  ];

	  $scope.addAlert = function() {
	    $scope.alerts.push({msg: "Another alert!"});
	  };

	  $scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

	  $scope.singleModel = 1;

	  $scope.radioModel = 'Middle';

	  $scope.checkModel = {
	    left: false,
	    middle: true,
	    right: false
	  };

  }]);
