var myapp= angular.module("myModule",[]);
myapp.controller("myController",function($scope){
    var country=[{
        name: "USA", capital:"WashingtonDC", flag:
    }]
    
    
    var employees =[{
        firstName:"Dhiraj",
        lastName: "Chhetri",
        gender: "male"
    },
    {
        firstName:"Manoj",
        lastName: "Chhetri",
        gender: "male"
    }]
    var countries=[{
        name: "UK",
        cities:[
            {name: "London" },
            {name: "Birmingham"},
            {name: "Manchester"},
        ]
    },
    {
        name: "USA",
        cities:[
            {name: 'LosAngles'},
            {name: "Chicago"},
            {name: "Hoston"},
        ]
    },
    {
        name: "India",
        cities:[
            {name: "Hyderabad"},
            {name: "Chennai"},
            {name: "Mumbai"},
        ]
    }]

    technologies=[
                {name:"C#",likes:0,dislikes:0 },
                {name:"ASP.net",likes:0,dislikes:0 },
                {name:"SQL Server",likes:0,dislikes:0 },
                {name:"AngularJS",likes:0,dislikes:0 }
    ]
    
    
    $scope.message = "Welcome to angular JS"
    $scope.employees=employees
    $scope.countries= countries
    $scope.technologies= technologies
    $scope.incrementLikes= function(technology){
        technology.likes++
    }
    $scope.incrementDislikes= function(technology){
        technology.dislikes++
    }
})