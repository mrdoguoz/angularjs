myApp.controller('constantController',['$scope','$state', '$stateParams',
    function($scope,$state,$stateParams){
        $scope.a = 8;
        

        $scope.constant = function(){

            $state.go('constant-result',{
              
                a: $scope.a
                
                
            })

        };
        
}]);    