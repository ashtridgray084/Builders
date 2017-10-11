ndmApp.controller('adminCtrl', function($scope, $rootScope, adminService) {
    //alert("test");
    //** Cooment here
    $rootScope.usertype = localStorage.usertype;
    $rootScope.loader = true;

    $rootScope.memberinfo_mgt = localStorage.memberinfo_mgt;
    $rootScope.attendance_mgt = localStorage.attendance_mgt;
    $rootScope.schedule_mgt = localStorage.schedule_mgt;
    $rootScope.salary_mgt = localStorage.salary_mgt;
    // $rootScope.usersettings_mgt = localStorage.usersettings_mgt;
    // $rootScope.accesssettings_mgt = localStorage.accesssettings_mgt;
    
    // renewCacheTime();

    $scope.fnameDisplay = '';
    $scope.lnameDisplay = '';
    $scope.unameDisplay = '';
    $scope.emailDisplay = '';

    $scope.activepage = "main";

    //API getAllMemberInfo Call when adminCtrl Load
    adminService.getAllMemberInfo()
        //Data catch to this function
        .then(function(data){
            //Array of All Member Info
            $scope.memberList = data.data;
            //End Loader
            $rootScope.loader = false;
        });

    adminService.getUserType()
        .then(function(data){
            //Array of All User Type
            $scope.usertypeList = data.data;
            //End Loader
            $rootScope.loader = false;
        }); 


   $scope.loadUserInfo = function(id,mail,fname,lname,mname,age,gender,status,phone,citizen,bday,addr){
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

    $scope.editMemberInfo = function(id,mail,fname,lname,mname,age,gender,status,phone,citizen,bday,addr){
        $scope.activepage = "edit";
        // $rootScope.loader = true;
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


    $scope.signUp = function(){
        // alert($scope.usertype + ":" + $scope.firstname + ":" + $scope.lastname + ":" + $scope.email + ":" + $scope.usernameInput + ":" + $scope.pwd + ":" + $scope.confirmPwd);

        if($scope.usertype == undefined || $scope.firstname == undefined || $scope.middlename == undefined || $scope.lastname == undefined || $scope.age == undefined || $scope.gender == undefined || $scope.birthdate == undefined || $scope.status == undefined || $scope.nationality == undefined || $scope.address == undefined || $scope.phone == undefined || $scope.email == undefined || $scope.usernameInput == undefined || $scope.pwd == undefined || $scope.usertype == 'none' ){
            alert('Please complete the form!');
        }else{
            $rootScope.loader = true;
            adminService.signupProcess($scope.firstname,$scope.middlename,$scope.lastname,$scope.age,$scope.gender,$scope.birthdate,$scope.status,$scope.nationality,$scope.address,$scope.phone,$scope.email,$scope.usernameInput,$scope.pwd,$scope.usertype)
                .then(function(data){
                    alert(data.data);
                    $rootScope.loader = false;
                    // location.reload();
                    window.location.href = "login.html";
                    // adminService.getUserList()
                    //     .then(function(data){
                    //         $scope.userList = data.data;
                    //         $rootScope.loader = false;
                    //     });
                });
        }
    }
    
    $scope.fnameDisplay = {
        fnameDisplay: 'first_name',
        password: null
    };

    $scope.open = function () {

        $modal.open({
            templateUrl: 'myModalContent.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $modalInstance, $log, fnameDisplay) {
                $scope.fnameDisplay = fnameDisplay;
                $scope.submit = function () {
                    $log.log('Submiting user info.');
                    $log.log(fnameDisplay);
                    $modalInstance.dismiss('cancel');
                }
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            resolve: {
                fnameDisplay: function () {
                    return $scope.fnameDisplay;
                }
            }
        });
    };

    $scope.user={};
    $scope.saveProfile = function(){
        var username = $scope.unameEdit;
        if(username==$scope.usernameOrigFetch){
            username = 'same_value';
        }
        // alert(username);
        $rootScope.loader = true;
        adminService.saveProfile($scope.userID,$scope.fnameEdit,$scope.lnameEdit,username,$scope.emailEdit)
            .then(function(data){
                $rootScope.loader = false;
                alert(data.data);
                if(data.data == 'Success'){
                    localStorage.username = $scope.unameDisplay;
                    $scope.fnameDisplay = $scope.fnameEdit;
                    $scope.lnameDisplay = $scope.lnameEdit;
                    $scope.unameDisplay = $scope.unameEdit;
                    $scope.emailDisplay = $scope.emailEdit;
                }
            });
    }

    $scope.savePassword = function(){
        $rootScope.loader = true;
        adminService.savePassword($scope.userID,$scope.oldPass,$scope.newPass)
            .then(function(data){
                $rootScope.loader = false;
                alert(data.data);
            }
        );
    }

    // Delete User List
    var deleteArray=[];
    $scope.selectToDel = function(selected,userID){
        if(selected == true){
            if (deleteArray.indexOf(userID) == -1) {
                deleteArray.push(userID);
            }
            console.log(deleteArray);
        }else{
            var index = deleteArray.indexOf(userID);
            if (index > -1) {
                deleteArray.splice(index, 1);
            }
            console.log(deleteArray);
        }
    }

    //JS Functions

    function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
    }
    
  function isNumeric (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    var regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
    
        
        
    $scope.cancelEdit = function(){
       $scope.activepage = 'main';
        editJSON = {};
        main = {};
    }

    var deleteArray=[];
    $scope.selectToDel = function(selected,userID){
        if(selected == true){
            if (deleteArray.indexOf(userID) == -1) {
                deleteArray.push(userID);
            }
            console.log(deleteArray);
        }else{
            var index = deleteArray.indexOf(userID);
            if (index > -1) {
                deleteArray.splice(index, 1);
            }
            console.log(deleteArray);
        }
    }
    
    $("#checkAll").change(function () {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.memberInfo, function(userList) {
            memberInfo.selected = $scope.selectedAll;
            if($scope.selectedAll == true){
                if (deleteArray.indexOf(memberInfo.userID) == -1) {
                    deleteArray.push(memberInfo.userID);
                }
            }else{
                var index = deleteArray.indexOf(memberInfo.userID);
                if (index > -1) {
                    deleteArray.splice(index, 1);
                }
            }
        });
        console.log(deleteArray);
    });    
            
    $('.deleteall').on("click", function(event){
        if(deleteArray.length < 1){ 
            alert("No data selected");
        }else{
            var tb = $(this).attr('title');
            var sel = false;
            var ch = $('#'+tb).find('tbody input[type=checkbox]');
            var c = confirm('Are you sure to delete this item?');
            if(c) {
                $rootScope.loader = true;
                adminService.delMember(deleteArray)
                    .then(function(data){
                        $rootScope.loader = false;
                        alert(data.data);
                        deleteArray=[];
        
                        ch.each(function(){
                           var $this = $(this);
                              if($this.is(':checked')) {
                                      sel = true; //set to true if there is/are selected row
                                  $this.parents('tr').fadeOut(function(){
                                  $this.remove(); //remove row when animation is finished
                                  });
                              }
                        });
                        if(!sel) alert('No data selected');
                    });
              
            }
        }
    return false;
    }); 

    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column){
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort: false;
        $scope.sortColumn = column; 
    }

    $scope.getSortClass = function (column){
        if($scope.sortColumn == column){
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        return '';
    }
    
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    $scope.data = [{"name":"","department":"","shift":"","dates":"","timed":"","weeks":""},{"name":"","department":"","shift":"","dates":"","timed":"","weeks":""},{"name":"","department":"","shift":"","dates":"","timed":"","weeks":""},{"name":"","department":"","shift":"","dates":"","timed":"","weeks":""},{"name":"","department":"","shift":"","dates":"","timed":"","weeks":""}];
          $scope.viewby = "10";
          $scope.totalItems = $scope.data.length;
          $scope.currentPage = 1;
          $scope.itemsPerPage = $scope.viewby;
          $scope.maxSize = 5; //Number of pager buttons to show

          $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
          };

          $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
          };

        $scope.setItemsPerPage = function(num) {
          $scope.itemsPerPage = num;
          $scope.currentPage = 1; //reset to first paghe
        }
    
    

    // var users = [
    //     {"id":1,"first_name":"Heather","last_name":"Bell","hobby":"Eating"},
    //     {"id":2,"first_name":"Andrea","last_name":"Dean","hobby":"Gaming"},
    //     {"id":3,"first_name":"Peter","last_name":"Barnes","hobby":"Reading Books"},
    //     {"id":4,"first_name":"Harry","last_name":"Bell","hobby":"Youtubing"},
    //     {"id":5,"first_name":"Deborah","last_name":"Burns","hobby":"Fishing"},
    //     {"id":6,"first_name":"Larry","last_name":"Kim","hobby":"Skipping"},
    //     {"id":7,"first_name":"Jason","last_name":"Wallace","hobby":"Football"},
    //     {"id":8,"first_name":"Carol","last_name":"Williams","hobby":"Baseball"},
    //     {"id":9,"first_name":"Samuel","last_name":"Olson","hobby":"Programming"},
    //     {"id":10,"first_name":"Donna","last_name":"Evans","hobby":"Playing DOTA"},
    //     {"id":11,"first_name":"Lois","last_name":"Butler","hobby":"Gaming"},
    //     {"id":12,"first_name":"Daniel","last_name":"Hill","hobby":"surfing"},
    //     {"id":13,"first_name":"Matthew","last_name":"Torres","hobby":"cycling"},
    //     {"id":14,"first_name":"Jerry","last_name":"Hernandez","hobby":"Music"},
    //     {"id":15,"first_name":"Christopher","last_name":"Carpenter","hobby":"Football"},
    //     {"id":16,"first_name":"Harold","last_name":"West","hobby":"Gaming"},
    //     {"id":17,"first_name":"Carol","last_name":"Hicks","hobby":"Youtubing"},
    //     {"id":18,"first_name":"Bonnie","last_name":"Davis","hobby":"Partying"},
    //     {"id":19,"first_name":"Nancy","last_name":"Banks","hobby":"Photography"},
    //     {"id":20,"first_name":"Walter","last_name":"Freeman","hobby":"Tweeting"},
    //     {"id":21,"first_name":"Louis","last_name":"Gonzales","hobby":"Bloging"},
    //     {"id":22,"first_name":"Jean","last_name":"Watkins","hobby":"Bloging"},
    //     {"id":23,"first_name":"Albert","last_name":"Harris","hobby":"Music"},
    //     {"id":24,"first_name":"Billy","last_name":"Owens","hobby":"Camping"},
    //     {"id":25,"first_name":"Russell","last_name":"Patterson","hobby":"Singing"}
    // ];
    // $scope.users = users;   

    // $scope.sort = function(keyname){
    //     $scope.sortKey = keyname;   //set the sortKey to the param passed
    //     $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    // }
});

//Link Password to Confirm Password

