angular.module('baseApp')
.value('baseConfigValueString','I am String Value')
.value('baseConfigValueDate',new Date())
.value('baseConfigValueNumber',92349)
.value('baseConfigValueObject',{name : 'I am Angular Object'});