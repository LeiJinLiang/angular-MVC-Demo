/**
 * Created by 桃子 on 2016/1/15.
 */
define(['app'], function (app) {
    console.log("route");
    return app.config(config);
    config.$inject = ["$stateProvider, $urlRouterProvider", "$locationProvider", "$httpProvider"];
    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
        //$locationProvider.html5Mode(true);
        $stateProvider
            .state("main",{
                url: "/home",
                templateUrl: 'view/main.html',
                controller: 'home',
                css: ['view/home/home.css']
            })
            .state("head",{
                url: "/head",
                templateUrl: 'view/head.html',
                controller: 'home',
                css: []
            })
    }
})