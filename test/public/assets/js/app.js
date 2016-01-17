/**
 * Created by 桃子 on 2016/1/15.
 */
/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */
console.log('app');
define(['angular',
    'angular-ui-router',
    'angular-css',
    'controller/index'
], function (angular) {
    return angular.module('app',[
        'ui.router',
        'door3.css',
        'app.controllers'
    ]);
})