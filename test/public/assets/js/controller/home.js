/**
 * Created by 桃子 on 2016/1/15.
 */
define(['./module'], function (controllers) {
    controllers.controller('home',info);
    info.$inject = ["$scope","$http"];
    function info($scope,$http){
        console.log("main--------success");
    }
})