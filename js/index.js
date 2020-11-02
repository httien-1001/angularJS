var app=angular.module('DemoApp', []);
  app.controller('MyCtrl', function($scope,$http){
    // $scope.name= "My Name";
    $http.get("json/data.json").then(function(response) {
      $scope.dataset = response.data;
    });
    $scope.data=[
      {"id":1,"name":"admin","pass":"123"},
      // {id:2,name:"tien",pass="123"}
    ];
    $scope.send= function(cName,cPass){
      for (let index = 0; index < $scope.data.length; index++) {
        // const element = array[index];
        if(cName==$scope.data[index].name && cPass== $scope.data[index].pass){
          $scope.info=$scope.data[index];
          console.log($scope.info);
          return true;
        } else {
          
          $scope.info = null;
          // alert('Invalid Input');
          console.log($scope.info);
          alert_error();
          return false;

        }
        
      }
    };
    function alert_error() {
      alert('Thong tin dang nhap khong hop le');
      
    };

  });
