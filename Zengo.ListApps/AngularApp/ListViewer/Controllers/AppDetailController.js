
(function () {

    var injectParams = ['$scope', '$routeParams', '$http'];

    var AppDetailController = function ($scope, $routeParams, $http)
    {
        var vm = $scope;

        // get the app id from the route params
        vm.appId = ($routeParams.appid) ? parseInt($routeParams.appid) : 0;

        var uri = 'api/app/' + vm.appId;

        $http.get(uri).success(function (response)
        {
            vm.app = response;
        });
    };

    AppDetailController.$inject = injectParams;

    myControllers.controller('AppDetailController', AppDetailController);

}());