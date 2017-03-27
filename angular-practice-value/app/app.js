angular.module('baseApp',[])
.config([function(){

}])
.run(['$rootScope','baseConfigValueString','baseConfigValueDate',function($rootScope,baseConfigValueString,baseConfigValueDate){
	$rootScope.baseConfigValueString = baseConfigValueString;
	$rootScope.baseConfigValueDate = baseConfigValueDate;	

}])