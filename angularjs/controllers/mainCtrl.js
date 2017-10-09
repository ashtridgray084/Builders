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

    adminService.getAllMemberInfo()
        .then(function(data){
            $scope.memberInfo = data.data;
            $rootScope.loader = false;
        });

    // adminService.getAllUserInfo()
    //     .then(function(data){
    //         $scope.userList = data.data;
    //         $rootScope.loader = false;
    //     });
        // $scope.first_name = "";
    // $scope.userID = id;
    // $scope.id = $scope.userID;
    // $scope.userID = localStorage.userID;

    $scope.loadUserInfo = function(id,mail,fname,lname,mname,age,gender,status,phone,citizen,bday,addr){
        // ,gender,status,citizen,bday,addr,phone,fname,lname,mname
        $scope.userIDEdit = id;
        $scope.ageEdit = age;
        $scope.fnameEdit = fname;
        $scope.lnameEdit = lname;
        $scope.mnameEdit = mname;
        $scope.mailEdit = mail;
        $scope.genderEdit = gender;
        $scope.statusEdit = status;
        $scope.phoneEdit = phone;
        $scope.citizenEdit = citizen;
        $scope.bdayEdit = bday;
        $scope.addrEdit = addr;
        // $scope.usertypeEdit = utype;
        $scope.ageOrig = angular.copy($scope.ageEdit);
        $scope.fnameOrig = angular.copy($scope.fnameEdit);
        $scope.lnameOrig = angular.copy($scope.lnameEdit);
        $scope.mnameOrig = angular.copy($scope.mnameEdit);
        $scope.mailOrig = angular.copy($scope.mailEdit);
        $scope.genderOrig = angular.copy($scope.genderEdit);
        $scope.statusOrig = angular.copy($scope.statusEdit);
        $scope.phoneOrig = angular.copy($scope.phoneEdit);
        $scope.citizenOrig = angular.copy($scope.citizenEdit);
        $scope.bdayOrig = angular.copy($scope.bdayEdit);
        $scope.addrOrig = angular.copy($scope.addrEdit);
    }

    $scope.editMember = function(id,mail,fname,lname,mname,age,gender,status,phone,citizen,bday,addr){
        var email = mail;
        var fname = fname;
        var lname = lname;
        var mname = mname;
        var age = age;
        var gender = gender;
        var status = status;
        var phone = phone;
        var nationality = citizen;
        var birthdate = bday;
        var address = addr;
        if(age==$scope.ageOrig){
            age = 'same_value';
        }
        if(fname==$scope.fnameOrig){
            fname = 'same_value';
        }
        if(lname==$scope.lnameOrig){
            lname = 'same_value';
        }
        if(mname==$scope.mnameOrig){
            mname = 'same_value';
        }
        if(mail==$scope.mailOrig){
            email = 'same_value';
        }
        if(gender==$scope.genderOrig){
            gender = 'same_value';
        }
        if(status==$scope.statusOrig){
            status = 'same_value';
        }
        if(phone==$scope.phoneOrig){
            phone = 'same_value';
        }
        if(citizen==$scope.citizenOrig){
            nationality = 'same_value';
        }
        if(bday==$scope.bdayOrig){
            birthdate = 'same_value';
        }
        if(addr==$scope.addrOrig){
            address = 'same_value';
        }
       
        $rootScope.loader = true;
        adminService.saveMemberInfo(id,age,fname,lname,mname,mail,gender,status,phone,citizen,bday,addr)
            .then(function(data){
                alert(data.data);
                if(data.data == "Success"){
                    adminService.getAllMemberInfo()
                        .then(function(data){
                            $scope.memberInfo = data.data;
                            $rootScope.loader = false;
                        });
                }else{
                    $rootScope.loader = false;
                }
            // Original Values
            // $scope.uID = data.data[0].userID;
            // $scope.first_name = data.data[0].first_name;
            // $scope.middle_name = data.data[0].middle_name;
            // $scope.last_name = data.data[0].last_name;
            // $scope.email = data.data[0].email;
            // $scope.age = data.data[0].age;
            // $scope.gender = data.data[0].gender;
            // $scope.status = data.data[0].status;
            // $scope.nationality = data.data[0].nationality;
            // $scope.address = data.data[0].address;
            // $scope.birthdate = data.data[0].birthdate;
            // $scope.phone = data.data[0].phone;
        });
    }

     $scope.saveEditRole = function(uID,uname,utype){
        var username = uname;
        var usertype = utype;
        if(uname==$scope.usernameOrig){
            username = 'same_value';
        }
        if(utype==$scope.usertypeOrig){
            usertype = 'same_value';
        }
        $rootScope.loader = true;
        adminService.saveEditRole(uID,username,usertype)
            .then(function(data){
                alert(data.data);
                if(data.data == "Success"){
                    adminService.getUserList()
                        .then(function(data){
                            $scope.userList = data.data;
                            $rootScope.loader = false;
                        });
                }else{
                    $rootScope.loader = false;
                }
            });

    }
    
    $('.test-input').unbind('keyup change input paste').bind('keyup change input paste',function(e){
    var $this = $(this);
    var val = $this.val();
    var valLength = val.length;
    var maxCount = $this.attr('maxlength');
    if(valLength>maxCount){
        $this.val($this.val().substring(0,maxCount));
    }
    });

     $('.allownumeric').bind("keypress keyup blur",function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });
   
   $('.numbersOnly').keyup(function () {
    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
       this.value = this.value.replace(/[^0-9\.]/g, '');
    }
});

    function AllowNumeric(txt){
        if (/\D/g.test(txt.value))
            txt.value = txt.value.replace(/\D/g, '');
        
    }

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