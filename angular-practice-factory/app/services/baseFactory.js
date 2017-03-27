angular.module('factoryApp',[])
.factory('baseFactory',['$filter',function($filter){
	var factory = {};
	factory.uppercase = function(data){
		return $filter('uppercase')(data)
	}
	return factory;
}]);