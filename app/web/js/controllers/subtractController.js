myApp.controller('subtractController',['$scope','$state',
    function($scope,$state){
        $scope.a = 4;
        $scope.b = 3;

        $scope.subtract = function(){

            $state.go('subtract-result',{

                a: $scope.a,
                b: $scope.b

            })

        };

}]);    