angular.module('baseApp')
.controller('parentController',['$scope','$rootScope',function($scope,$rootScope){
	$scope.context = 'Parent';
	$scope.name = 'I am Parent';
}]);