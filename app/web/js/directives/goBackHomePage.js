myApp.directive('goBackHomePage',function(){

    return{

        //restrict: 'A', 'C' class, 
        restrict: 'E',
        template: '<button type="button" class="btn-info" ng-click="goBack()">Elephant</button>'

    }

})