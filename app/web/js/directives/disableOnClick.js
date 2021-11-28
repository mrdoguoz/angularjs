myApp.directive('disableOnClick', function(){

    return{

        restrict: 'A',
        link: link


    }


    function link($scope,element,attr){

        $(element).click(function(){

            $(element).attr('disabled',true);

        });


    }

});