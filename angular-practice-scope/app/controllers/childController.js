angular.module('baseApp')
.controller('childController',['$scope','$rootScope',function($scope,$rootScope){
	$scope.name = 'I am Child';
}]);