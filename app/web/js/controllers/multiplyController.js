myApp.controller('multiplyController',['$scope','$state',
    function($scope,$state){
        $scope.a = 3;
        $scope.b = 3;

        $scope.multiply = function(){

            $state.go('multiply-result',{
              
                a: $scope.a,
                b: $scope.b
                
            })

        };
        
}]);    