

myControllers.controller('ListController', function ($scope, $http)
{
    var uri = 'api/app';

    $http.get(uri).success(function (response)
    {
        $scope.list = response;
    });

});
