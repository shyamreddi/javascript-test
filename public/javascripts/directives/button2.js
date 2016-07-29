myApp.directives.directive('button2', [function () {
    return {
		restrict: 'E',
        scope: {
            color: '@'
        },
		
		template:'<button type="button" style="background-color:{{color}};">Click</button>',
		
        link: function ($scope,attributes) {
			
			
        }
    }
}]);