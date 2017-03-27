angular.module('baseApp',['serviceApp'])
.config([function(){

}])
.run(['$rootScope','baseService',function($rootScope,baseService){
	$rootScope.firstName = baseService.firstName;
	$rootScope.lastName = baseService.lastName;
}])