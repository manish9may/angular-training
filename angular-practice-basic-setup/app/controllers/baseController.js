angular.module('basicApp')
.controller('baseController',['$scope','$rootScope',function($scope,$rootScope){
	$scope.name = 'Angular Basic Setup App';
}]);