myApp.controller('divideController',['$scope','$state',
    function($scope,$state){
        $scope.a = 4;
        $scope.b = 3;

        $scope.divide = function(){

            $state.go('divide-result',{

                a: $scope.a,
                b: $scope.b

            })

        };

}]);    