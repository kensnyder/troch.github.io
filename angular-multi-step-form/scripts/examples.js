'use strict';

angular

.module('msfDemo', ['ngAnimate', 'ngRoute', 'multiStepForm', 'ui.bootstrap', 'hljs'])

.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: '<div class="alert alert-warning">This page is work in progress, come back to check later!</div>'
                // controller: ''
            })
            .when('/getting-started', {
                controller: 'GettingStartedCtrl',
                templateUrl: '/angular-multi-step-form/partials/example.html',
            })
            .otherwise('/home');
    }
])

.controller('GettingStartedCtrl', [
    '$scope',
    function ($scope) {
        $scope.exampleId = 1;

        $scope.steps = [
            {
                templateUrl: '/angular-multi-step-form/examples/1/step1.html',
                title: 'Get the source'
            },
            {
                templateUrl: '/angular-multi-step-form/examples/1/step2.html',
                title: 'Add it to your app'
            },
            {
                templateUrl: '/angular-multi-step-form/examples/1/step3.html',
                title: 'Create your multi step forms / wizzards'
            },
            {
                template: '<div class="well">Discover with the available examples and documentation the versatility of this lightweight angular module (6kb minified).</div>',
                title: 'Discover the examples and read the docs!'
            }
        ];
    }
])
