angular.module('baseApp')
.controller('baseController',['$scope','$rootScope','baseConfigConstantNumber','baseConfigConstantObject',function($scope,$rootScope,baseConfigConstantNumber,baseConfigConstantObject){
	$scope.baseConfigConstantNumber = baseConfigConstantNumber;
	$scope.baseConfigConstantObject = baseConfigConstantObject;
}]);