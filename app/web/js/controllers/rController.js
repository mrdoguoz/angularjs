myApp.controller('rController',['$scope','$state','$stateParams',
    function($scope,$state,$stateParams){
        
        $scope.a = 0;
      

        $scope.goBack = function(){

            $state.go('home',{

               

            })

        };

        //console.log($state)

        if($stateParams.a){

            $scope.a  = $stateParams.a;

        }

        $scope.constantResult = parseInt($scope.a) * $state.current.data.multiplier //+ $state.current.data.deneme

        $scope.exponentResult = parseInt($scope.a) * parseInt($scope.a) //Math.pov()

        $scope.squarerootResult = Math.sqrt(parseInt($scope.a));
 }]);  