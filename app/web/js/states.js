var myApp = angular.module("myApp",['ui.router']);
myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider.state('home',{

        url: '/',//anasayfa
        template: '<div style="text-align:center;"><img style="padding:70px"' + 'src="img/c3be8430548f579cb2d8fe063196dc62.png"/><h1></h1></div>'

    })//; kaldırdık .state şeklinde devam ediyoruz  

    .state('adding',{

        url: '/add',//sum sekmesi
        templateUrl:'../html/add.html',
        controller: 'addController'

    })

    .state('adding-result',{

        url: '/result/:a/:b',//sum sekmesi
        templateUrl:'../html/addingresult.html',
        controller: 'resultController'

    })
    
    .state('subtract',{

        url: '/subtract',//sum sekmesi
        templateUrl:'../html/subtract.html',
        controller: 'subtractController'

    })

    .state('subtract-result',{

        url: '/result/:a/:b',//sum sekmesi
        templateUrl:'../html/subtractresult.html',
        controller: 'resultController'

    })
    
    .state('multiply',{

        url: '/multiply',//sum sekmesi
        templateUrl:'../html/multiply.html',
        controller: 'multiplyController'

    })

    .state('multiply-result',{

        url: '/result/:a/:b',//sum sekmesi
        templateUrl:'../html/multiplyresult.html',
        controller: 'resultController'
        
    })

    .state('divide',{

        url: '/divide',//sum sekmesi
        templateUrl:'../html/divide.html',
        controller: 'divideController'

    })

    .state('second-adding',{

        url: '/_add',//sum sekmesi
        templateUrl:'../html/main.html',
        controller: 'secondAddController'

    })

    .state('second-subtract',{

        url: '/_subtract',//sum sekmesi
        templateUrl:'../html/main.html',
        controller: 'secondSubtractController'

    })

    .state('second-multiply',{

        url: '/_multiply',//sum sekmesi
        templateUrl:'../html/main.html',
        controller: 'secondMultiplyController'

    })

    .state('second-divide',{

        url: '/_divide',//sum sekmesi
        templateUrl:'../html/main.html',
        controller: 'secondDivideController'
        
    })

    .state('second-constant',{

        url: '/_constant',//sum sekmesi
        templateUrl:'../html/main.html',
        controller: 'secondConstantController'
        
    })

    .state('second-exponent',{

        url: '/_exponent',//sum sekmesi
        templateUrl:'../html/main.html',
        controller: 'secondExponentController'
        
    })

    .state('second-squareroot',{

        url: '/_squareroot',//sum sekmesi
        templateUrl:'../html/main.html',
        controller: 'secondSquarerootController'
        
    })

    .state('result',{

        //url: '/result/:a/:b/:c',//sum sekmesi
        url: '/result/:a/:b',
        templateUrl:'../html/result.html',
        controller: 'secondResultController',
        params:{
            //b:{value: '1'},
            c:{value:'c yi gosterme'}
        },
        data:{
            multiplier: 10,
            deneme:"olmadı"
        }
    })

    .state('constant',{

        url: '/constant',//sum sekmesi
        templateUrl:'../html/constant.html',
        controller: 'constantController'

    })

    .state('constant-result',{

        url: '/result/:a',//sum sekmesi
        templateUrl:'../html/constantresult.html',
        controller: 'rController',
        data:{
            multiplier: 5,
            deneme:"olmadı"
        }
        
    })

    .state('exponent',{

        url: '/exponent',//sum sekmesi
        templateUrl:'../html/exponent.html',
        controller: 'exponentController'

    })

    .state('exponent-result',{

        url: '/result/:a',//sum sekmesi
        templateUrl:'../html/exponentresult.html',
        controller: 'rController',
        data:{
            multiplier: 5,
            deneme:"oldu"
        }
        
    })

    .state('squareroot',{

        url: '/squareroot',//sum sekmesi
        templateUrl:'../html/squareroot.html',
        controller: 'squarerootController'

    })

    .state('squareroot-result',{

        url: '/result/:a',//sum sekmesi
        templateUrl:'../html/squarerootresult.html',
        controller: 'rController',
        data:{
            multiplier: 5,
            deneme:"oldu"
        }
        
    })

    .state('divide-result',{

        url: '/result/{a:[0-9]}/{b:[0-9]}',//sum sekmesi
        templateUrl:'../html/divideresult.html',
        controller: 'resultController'
        /*
        ,params: {
            a:{value:'5'},
            b:{value:'1'}
        }
        */
    });

    $urlRouterProvider.otherwise("/");//adres çubuğuna yazılan yazıları engeller



}]);

//app.controller("myControl",function($scope,$http){});