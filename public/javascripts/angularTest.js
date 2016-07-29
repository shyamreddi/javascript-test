var myApp = angular.module('myApp',['myApp.directives']);

myApp.directives = angular.module('myApp.directives', []);

myApp.controller('test1Controller', ['$scope', '$timeout' ,function($scope,$timeout) {
  $scope.color = 'green';

  $scope.alertHandler = () => {
  	alert('Hello!');
  }
$scope.show= false;
$timeout(function(){$scope.show = true}, 3000);
  $scope.items = [
  	{id: 1, name:'John'},
  	{id: 2, name:'Piter'},
  	{id: 3, name:'Mike', inactive: true},
  	{id: 5, name:'Herman'},
  	{id: 6, name:'Nick', inactive: true}
  ]
}]);