myApp.controller('exponentController',['$scope','$state', '$stateParams',
    function($scope,$state,$stateParams){
        $scope.a = 8;
        

        $scope.exponent = function(){

            $state.go('exponent-result',{
              
                a: $scope.a
                
                
            })

        };
        
}]);    