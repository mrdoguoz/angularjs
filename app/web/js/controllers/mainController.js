myApp.controller('secondAddController',['$scope','$state','$stateParams',

    function($scope,$state,$stateParams){

        $scope.a = 4;
        $scope.b = 5;
        $scope.c = "add";

        $scope.process = "sum"

        $scope.addingProcess = true;

        $scope.secAdd = function(){

            $state.go('result',{

                a: $scope.a,
                b: $scope.b,
                c: $scope.c

            })

        }

    }


])

.controller('secondResultController',['$scope','$state','$stateParams',

    function($scope,$state,$stateParams){

        $scope.a = 0;
        $scope.b = 0;
        $scope.c = "";

        $scope.goBack = function(){

            $state.go('home',{});

        }

        if($stateParams.a){

            $scope.a = $stateParams.a;

        }

        if($stateParams.b){

            $scope.b = $stateParams.b;

        }

        if($stateParams.c){

            $scope.c = $stateParams.c;

        }

        if($scope.c == "add"){

            $scope.result = parseInt($scope.a) + parseInt($scope.b);
            $scope.action = "Sum"

        }

        if($scope.c == "subtract"){

            $scope.result = parseInt($scope.a) - parseInt($scope.b);
            $scope.action = "Subtract"
        }

        if($scope.c == "multiply"){

            $scope.result = parseInt($scope.a) * parseInt($scope.b);
            $scope.action = "multiply"
        }

        if($scope.c == "divide"){

            $scope.result = parseInt($scope.a) / parseInt($scope.b);
            $scope.action = "divide"

        }

        if($scope.c == "constant"){

            $scope.result = parseInt($scope.a)*$state.current.data.multiplier;
            $scope.action = "constant"

        }

        if($scope.c == "exponent"){

            $scope.result = Math.pow($scope.a,2);
            $scope.action = "exponent"

        }

        if($scope.c == "squareroot"){

            $scope.result = Math.sqrt($scope.a);
            $scope.action = "squareroot"

        }
        


    }


])

.controller('secondSubtractController',['$scope','$state','$stateParams',

    function($scope,$state,$stateParams){

        $scope.a = 4;
        $scope.b = 5;
        $scope.c = "subtract";

        $scope.process = "subtract"

        $scope.subtractProcess = true;

        $scope.secSubtract = function(){

            $state.go('result',{

                a: $scope.a,
                b: $scope.b,
                c: $scope.c

            })

        }

    }


])

.controller('secondMultiplyController',['$scope','$state','$stateParams',

    function($scope,$state,$stateParams){

        $scope.a = 4;
        $scope.b = 5;
        $scope.c = "multiply";

        $scope.process = "multiply"

        $scope.multiplyProcess = true;

        $scope.secMultiply = function(){

            $state.go('result',{

                a: $scope.a,
                b: $scope.b,
                c: $scope.c

            })

        }

    }


])


.controller('secondConstantController',['$scope','$state','$stateParams',

    function($scope,$state,$stateParams){

        $scope.a = 4;

        $scope.c = "constant";

        $scope.process = "constant"

        $scope.constantProcess = true;

        $scope.secConstant = function(){

            $state.go('result',{

                a: $scope.a,
                b: 1,
                c: $scope.c

            })

        }

    }


])


.controller('secondExponentController',['$scope','$state','$stateParams',

    function($scope,$state,$stateParams){

        $scope.a = 6;

        $scope.c = "exponent";

        $scope.process = "exponent"

        $scope.exponentProcess = true;

        $scope.secExponent = function(){

            $state.go('result',{

                a: $scope.a,
                b: 1,
                c: $scope.c

            })

        }

    }


])


.controller('secondSquarerootController',['$scope','$state','$stateParams',

    function($scope,$state,$stateParams){

        $scope.a = 9;

        $scope.c = "squareroot";

        $scope.process = "squareroot"

        $scope.squarerootProcess = true;

        $scope.secSquareroot = function(){

            $state.go('result',{

                a: $scope.a,
                b: 1,
                c: $scope.c

            })

        }

    }


])


.controller('secondDivideController',['$scope','$state','$stateParams',

    function($scope,$state,$stateParams){

        $scope.a = 4;
        $scope.b = 5;
        $scope.c = "divide";

        $scope.process = "divide"

        $scope.divideProcess = true;

        $scope.secDivide = function(){

            $state.go('result',{

                a: $scope.a,
                b: $scope.b,
                c: $scope.c

            })

        }

    }


])



