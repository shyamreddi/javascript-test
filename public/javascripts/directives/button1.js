myApp.directives.directive('button1', [function () {
	
    return {
		template:'<button type="button" style="background-color:{{color}};" >Click</button>',
		
        link: function ($scope,elem) {
			elem.bind('click', function(){
			$scope.alertHandler();
			  
			})
		}
    }
	
	
}]);