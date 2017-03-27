angular.module('serviceApp',[])
.service('baseService',[function(){
	this.firstName = 'Angular';
	this.lastName = 'Js';
	this.getFullName = function(){
		return this.firstName + ' ' + this.lastName;
	}
}])