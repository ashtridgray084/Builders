ndmApp.controller('mainCtrl', function($scope, $window, $rootScope, adminService){
    $scope.usertype = localStorage.usertype;
    // $scope.username = localStorage.username;
    // $rootScope.usertype = localStorage.usertype;
    $rootScope.usertype = localStorage.usertype;
    $rootScope.userID = localStorage.userID;
    $scope.username = localStorage.username;
    $rootScope.loader = true;
    renewCacheTime();
    
    adminService.getCurrentAccess(localStorage.username)
        .then(function(data){
            $rootScope.loader = false;
            localStorage.memberinfo_mgt = data.data[0].memberinfo_mgt;
            localStorage.attendance_mgt = data.data[0].attendance_mgt;
            localStorage.schedule_mgt = data.data[0].schedule_mgt;
            localStorage.salary_mgt = data.data[0].salary_mgt;
            // localStorage.usersettings_mgt = data.data[0].usersettings_mgt;
            // localStorage.accesssettings_mgt = data.data[0].accesssettings_mgt;
            $rootScope.memberinfo_mgt = data.data[0].memberinfo_mgt;
            $rootScope.attendance_mgt = data.data[0].attendance_mgt;
            $rootScope.schedule_mgt = data.data[0].schedule_mgt;
            $rootScope.salary_mgt = data.data[0].salary_mgt;
            // $rootScope.usersettings_mgt = data.data[0].usersettings_mgt;
            // $rootScope.accesssettings_mgt = data.data[0].accesssettings_mgt;
        }
    );

            // $scope.id = localStorage.id;

    // $scope.username = localStorage.username;

    // adminService.getMemberInfo(localStorage.username)
    //     .then(function(data){
    //         $scope.member = data.data;
    //         $rootScope.loader = false;
    //     });

    // adminService.getAllMemberInfo(id)
    //     .then(function(data){
    //         $scope.memberList = data.data;
    //         $rootScope.loader = false;
    //     });

    // adminService.getAllUserInfo()
    //     .then(function(data){
    //         $scope.userList = data.data;
    //         $rootScope.loader = false;
    //     });
        // $scope.first_name = "";
    // $scope.userID = id;
    // $scope.id = $scope.userID;
    // $scope.userID = localStorage.userID;
    // adminService.editMember($scope.id)
    //     .then(function(data){
    //     $scope.id = data.data[0].userID;
    //     $scope.f_name = data.data[0].first_name;
    // });

        // adminService.saveEditProd($scope.MainID,editJSON)
        // .then(function(data){
        //     $rootScope.loader = false;
        //     $scope.cancelEdit();
        // });

    // }

    // $scope.userID = '';
    // $scope.fname = '';
    // $scope.lname = '';
    // $scope.mname = '';
    // $scope.email = '';
    // $scope.age = '';
    // $scope.gender = '';
    // $scope.status = '';
    // $scope.nationality = '';
    // $scope.birthdate = '';
    // $scope.address = '';

    // adminService.getMemberInfo()
    //     .then(function(data){
    //         $scope.member = data.data;
    //      // alert(data.data[0].first_name);
    //     // $scope.userID = data.data[0].userID;
    //     // $scope.first_name = data.data[0].first_name;
    //     // $scope.lname = data.data[0].last_name;
    //     // $scope.mname = data.data[0].middle_name;
    //     // $scope.email = data.data[0].email;
    //     // $scope.age = data.data[0].age;
    //     // $scope.gender = data.data[0].gender;
    //     // $scope.status = data.data[0].status;
    //     // $scope.nationality = data.data[0].nationality;
    //     // $scope.birthdate = data.data[0].birthdate;
    //     // $scope.address = data.data[0].address;

    //         //for edit purpose
    //         // $scope.fnameEdit = data.data[0].first_name;
    //         // $scope.lnameEdit = data.data[0].last_name;
    //         // $scope.unameEdit = data.data[0].username;
    //         // $scope.emailEdit = data.data[0].email;

    //      //for edit profile purpose
    //         // $scope.usernameOrigFetch = angular.copy($scope.unameEdit);
    //  });

	
    // $scope.sortColumn = "name";
    // $scope.reverseSort = false;

    // $scope.sortData = function (column){
    //     $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort: false;
    //     $scope.sortColumn = column; 
    // }

    // $scope.getSortClass = function (column){
    //     if($scope.sortColumn == column){
    //         return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
    //     }
    //     return '';
    // }
    
});