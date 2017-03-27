angular.module('baseApp')
.controller('baseController',['$scope','$rootScope','baseFactory',function($scope,$rootScope,baseFactory){
	$scope.name = baseFactory.uppercase('I am Angular!');
}])