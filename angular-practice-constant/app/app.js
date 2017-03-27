angular.module('baseApp',[])
.config(['baseConfigConstantString',function(baseConfigConstantString){
	baseConfigConstantString = 'I am String Modify Constant';
}])
.run(['$rootScope','baseConfigConstantString','baseConfigConstantDate','baseConfigConstantNumber',function($rootScope,baseConfigConstantString,baseConfigConstantDate,baseConfigConstantNumber){
	$rootScope.baseConfigConstantString = baseConfigConstantString;
	$rootScope.baseConfigConstantDate = baseConfigConstantDate;	
	baseConfigConstantNumber = '34653456';
}])