var app = angular.module("myApp",[])

app.controller('controller1', function($scope,$http){
	$http.get("https://swapi.co/api/species").then(function(res){
		$scope.name =  res.data
		console.log("my api call",res.data)
	})
})