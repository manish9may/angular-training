angular.module('baseApp')
.controller('baseController',['$scope','$rootScope','configuarableService',function($scope,$rootScope,configuarableService){
	$scope.name = configuarableService.name;

}])