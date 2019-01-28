var myapp= angular.module("myModule",[]);
myapp.controller("myController",function($scope){
    var employees=[
        {name:"Ben", dateOfBirth: new Date("November 23, 1980"), gender:"Female", salary:555000.889},
        {name:"Hobbin", dateOfBirth: new Date("September 23, 1980"), gender:"Male", salary:555000.889},
        {name:"Cary", dateOfBirth: new Date("Jan 23, 1981"), gender:"Female", salary:555000.889},
        {name:"Cary", dateOfBirth: new Date("Feb 23, 1983"), gender:"Female", salary:555000.889},
        {name:"Cary", dateOfBirth: new Date("Mar 12, 1986"), gender:"Female", salary:555000.889},
        {name:"Mark", dateOfBirth: new Date("July 23, 1980"), gender:"Male", salary:555000.889}
    ]
    $scope.employees= employees
    $scope.sortColumn="name"
    $scope.reverseSort= false
    
    $scope.sortData = function (column){
        $scope.reverseSort = ($scope.sortColumn ==column)? !$scope.reverseSort : false
        $scope.sortColumn=column

    }

    $scope.getSortClass=function(column){
        if($scope.sortColumn==column){
            return $scope.reverseSort ? 'arrow-down': 'arrow-up'
        }
        return ''
    }
})