/**
 * Created by 桃子 on 2016/1/15.
 */
require.config({
    shim:{
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-ui-router': ['angular'],
        'angular-css':['angular']
    },
    paths:{
        "jquery":"lib/angular/jquery-2.1.3.min",
        "angular":"lib/angular/angular.min",
        "index":"index",
        "angular-ui-router":"lib/bower_components/angular-ui-router/release/angular-ui-router.min",
        "angular-css":"lib/bower_components/angular-css/angular-css.min"
    },
    deps: [
        'index'
    ]
})
