(function(){
    

    var app = angular.module('friendsList');  //does not create a new module, references the original
    
    app.controller('mainCtrl', function($scope){
        $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];
        
        $scope.newName = '';  ///pulls from ng-model
        
        $scope.addFriend = function() {
            $scope.friends.push($scope.newName);
            $scope.newName = '';
        };
    });
    

    
    
})();


