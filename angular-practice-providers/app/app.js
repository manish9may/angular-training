angular.module('baseApp',['providerApp'])
.config(['configuarableServiceProvider',function(configuarableServiceProvider){
	configuarableServiceProvider.setName('I am Angular!');
}])
.run(['$rootScope',function($rootScope){

}])