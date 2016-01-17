/**
 * Created by 桃子 on 2016/1/15.
 */
define(['./module'], function (controllers) {
    controllers.controller('head',headinfo);
    headinfo.$inject = ["$scope","$http"];
    function headinfo($scope,$http){
        console.log("headinfo--------success");
    }
})