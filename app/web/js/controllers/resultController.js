myApp.controller('resultController',['$scope','$state','$stateParams',
    function($scope,$state,$stateParams){
        
        $scope.a = 0;
        $scope.b = 0;

        $scope.goBack = function(){

            $state.go('home',{

               

            })

        };

        console.log($state)

        if($stateParams.a){

            $scope.a  = $stateParams.a;

        }

        if($stateParams.b){

            $scope.b  = $stateParams.b;

        }

        $scope.addingResult = parseInt($scope.a) + parseInt($scope.b)

        $scope.subtractResult = parseInt($scope.a) - parseInt($scope.b)

        $scope.multiplyResult = parseInt($scope.a) * parseInt($scope.b)
        //alert("çalışıyor mu")
        $scope.divideResult = parseInt($scope.a) / parseInt($scope.b)

        //$scope.constantResult = parseInt($scope.a) * 5



}]);    