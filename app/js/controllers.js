'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$scope', '$location', '$document', function($scope, $location, $document) {
    $scope.items = [
      {path: '/home', title: '首页'},
      {path: '/about', title: '关于'},
    ];
    $scope.top = "";
    $scope.isActive = function(item) {
      if (item.path == $location.path()) {
        return true;
      }
      return false;
    };
    $scope.BackToTop = function() {
      $document.scrollTop(0, 200);
    }; 


  }])


  .controller('HomeCtrl', ['$scope', function($scope) {

  
  }])


  .controller('AboutCtrl', ['$scope', function($scope) {


  }]);
