angular.module('baseApp')
.controller('baseController',['$scope','$rootScope','baseService',function($scope,$rootScope,baseService){
	$scope.fullName = baseService.getFullName();
}])