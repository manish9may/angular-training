angular.module('baseApp',[])
.config(['$httpProvider',function($httpProvider){

}])
.run(['$rootScope',function($rootScope){
	$rootScope.name = 'I am in Run Method';
}])