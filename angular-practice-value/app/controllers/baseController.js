angular.module('baseApp')
.controller('baseController',['$scope','$rootScope','baseConfigValueNumber','baseConfigValueObject',function($scope,$rootScope,baseConfigValueNumber,baseConfigValueObject){
	$scope.baseConfigValueNumber = baseConfigValueNumber;
	$scope.baseConfigValueObject = baseConfigValueObject;
}]);