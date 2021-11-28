myApp.controller('squarerootController',['$scope','$state', '$stateParams',
    function($scope,$state,$stateParams){
        $scope.a = 25;
        

        $scope.squareroot = function(){

            $state.go('squareroot-result',{
              
                a: $scope.a
                
                
            })

        };
        
}]);    