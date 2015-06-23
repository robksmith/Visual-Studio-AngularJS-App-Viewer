

myControllers.controller('ListController', function ($scope) {
    $scope.firstName = "My";
    $scope.lastName = "Name";

    $scope.list = [
        { id: 1, name: 'DS File', version: '2.1', col: 'red', installed: '1288323623006', canDelete: true, memory: 1024 },
        { id: 2, name: 'Plex', version: '2.2', col: 'blue', installed: '20/01/1990', memory: 1024 },
        { id: 2, name: 'Plex', version: '2.3', col: 'blue', installed: '20/01/1990', memory: 1024 },
        { id: 2, name: 'Plex', version: '2.4', col: 'blue', installed: '20/01/1990', memory: 1024 },
        { id: 2, name: 'Plex', version: '2.5', col: 'blue', installed: '20/01/1990', memory: 1024 },
        { id: 2, name: 'Plex', version: '2.6', col: 'blue', installed: '20/01/1990', memory: 1024 },
        { id: 2, name: 'Plex', version: '2.7', col: 'blue', installed: '20/01/1990', memory: 1024 },
        { id: 2, name: 'Plex', version: '2.8', col: 'blue', installed: '20/01/1990', memory: 1024 },
        { id: 2, name: 'Plex', version: '2.9', col: 'blue', installed: '20/01/1990', memory: 1024 },
        { id: 3, name: 'BBC', version: '3.0', col: 'green', installed: '20/01/1990', memory: 1024 },
        { id: 4, name: 'Angry Birds', version: '3.1', canDelete: true, col: 'red', installed: '20/01/1990', memory: 1024 },
        { id: 5, name: 'Weather App', version: '3.2', col: 'red', installed: '20/01/1990', memory: 1024 }];
});
