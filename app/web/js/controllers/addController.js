myApp.controller('addController',['$scope','$state',
    function($scope,$state){
        $scope.a = 5;
        $scope.b = 6;

        $scope.add = function(){

            $state.go('adding-result',{

                a: $scope.a,
                b: $scope.b

            })

        };

}]);    