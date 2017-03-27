angular.module('providerApp',[])
.provider('configuarableService',[function(){
	var provider = {};
	provider.name = ''
	this.setName = function(name){
		provider.name = name;
	}
	this.$get = function(){
		return provider;
	}
}])