
(function () {
    var webApp = angular.module("angularListViewerApp",
        [
            'ngRoute',
            'myControllers'
        ]);

    webApp.config(['$routeProvider',
      function ($routeProvider)
      {
          var partialsLocation = '/AngularApp/ListViewer/Views/Partials/';

          $routeProvider.
            when('/showAsCards', {
                templateUrl: partialsLocation + 'ShowAsCards.html',
                controller: 'ListController',
                controllerAs: 'vm'
            }).
            when('/appDetail/:appid', {
                templateUrl: partialsLocation + 'AppDetail.html',
                controller: 'AppDetailController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/showAsCards'
            });
      }]);


    // Specify HTML5 mode (using the History APIs) or HashBang syntax.
    //$locationProvider.html5Mode(false).hashPrefix('!');
})();