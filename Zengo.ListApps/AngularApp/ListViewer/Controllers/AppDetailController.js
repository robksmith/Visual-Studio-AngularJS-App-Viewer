
(function () {

    var injectParams = ['$scope', '$routeParams', '$http'];

    var AppDetailController = function ($scope, $routeParams, $http)
    {
        var vm = $scope;

        // get the app id from the route params
        vm.appId = ($routeParams.appid) ? parseInt($routeParams.appid) : 0;

        // from the list, find the list of results
        var result = $.grep(myControllers.list, function (e) { return e.id == vm.appId; });

        // from the list of results, just take the first one
        vm.app = result[0];
    };

    AppDetailController.$inject = injectParams;

    myControllers.controller('AppDetailController', AppDetailController);

}());