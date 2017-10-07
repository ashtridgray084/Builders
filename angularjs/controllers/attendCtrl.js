ndmApp.controller('attendCtrl', function($scope, $window, $rootScope, attendService){
  	$rootScope.usertype = localStorage.usertype;
    $rootScope.loader = true;

    $rootScope.memberinfo_mgt = localStorage.memberinfo_mgt;
    $rootScope.attendance_mgt = localStorage.attendance_mgt;
    $rootScope.schedule_mgt = localStorage.schedule_mgt;
    $rootScope.salary_mgt = localStorage.salary_mgt;
    $rootScope.usersettings_mgt = localStorage.usersettings_mgt;
    $rootScope.accesssettings_mgt = localStorage.accesssettings_mgt;
    renewCacheTime();

    $scope.activepage = "main";
    $rootScope.loader = true;

    // $scope.employees = employees;

    attendService.getAllAttendance()
        .then(function(data){
            $scope.attendanceList = data.data;
        });

    $scope.attendList = function(){
        attendService.getAllAttendance()
        .then(function(data){
            $scope.attendanceList = data.data;
        });
    }

    $scope.editAttendee = function(id){
        $scope.activepage = 'edit';
        // $scope.MainID = id;
        // $scope.attID = userID;
        // $scope.attName = name;
        // $scope.attEmail = email;
        // $scope.memberNameOrig = angular.copy($scope.mailNameEdit);
        // $scope.memberEmailOrig = angular.copy($scope.mailEmailEdit);
        attendService.editAttendee(id)
        .then(function(data){
            $rootScope.loader = false;

            // Original Values
            $scope.attID = data.data[0].id;
            $scope.attuID = data.data[0].userID;
            $scope.attName = data.data[0].name;
            $scope.attDept = data.data[0].department;
            $scope.attShift = data.data[0].shift;
            $scope.attDates = data.data[0].dates;
            $scope.attTimeIn = data.data[0].time_in;
            $scope.attTimeOut = data.data[0].time_out;
            $scope.attWorkDay = data.data[0].workday;
            $scope.attDay = data.data[0].attend_day;
            $scope.attAbsDay = data.data[0].absence_day;
            $scope.attLate = data.data[0].lateness;
            $scope.attEL = data.data[0].early_leave;
            $scope.attLeave = data.data[0].leaved;
            $scope.attSL = data.data[0].sickleave;
            $scope.attOThrs = data.data[0].ot_hrs;
            $scope.attOT = data.data[0].ot;

            // Edit Values
            $scope.editAttID = data.data[0].id;
            $scope.editAttuID = data.data[0].userID;
            $scope.editAttName = data.data[0].name;
            $scope.editAttDept = data.data[0].department;
            $scope.editAttShift = data.data[0].shift;
            $scope.editAttDates = data.data[0].dates;
            $scope.editAttTimeIn = data.data[0].time_in;
            $scope.editAttTimeOut = data.data[0].time_out;
            $scope.editAttWorkDay = data.data[0].workday;
            $scope.editAttDay = data.data[0].attend_day;
            $scope.editAttAbsDay = data.data[0].absence_day;
            $scope.editAttLate = data.data[0].lateness;
            $scope.editAttEL = data.data[0].early_leave;
            $scope.editAttLeave = data.data[0].leaved;
            $scope.editAttSL = data.data[0].sickleave;
            $scope.editAttOThrs = data.data[0].ot_hrs;
            $scope.editAttOT = data.data[0].ot;

            $scope.orgValArr = {
                name: $scope.attName,
                department: $scope.attDept,
                shift: $scope.attShift,
                dates: $scope.attDates,
                time_in: $scope.attTimeIn,
                time_out: $scope.attTimeOut,
                workday: $scope.attWorkDay,
                attend_day: $scope.attDay,
                absence_day: $scope.attAbsDay,
                lateness: $scope.attLate,
                early_leave: $scope.attEL,
                leaved: $scope.attLeave,
                sickleave: $scope.attSL,
                ot_hrs: $scope.attOThrs,
                ot: $scope.attOT
            };
            
            $scope.attName = angular.copy($scope.editAttName);
            $scope.attDept = angular.copy($scope.editAttDept);
            $scope.attShift = angular.copy($scope.editAttShift);
            $scope.attDates = angular.copy($scope.editAttDates);
            $scope.attTimeIn = angular.copy($scope.editAttTimeIn);
            $scope.attTimeOut = angular.copy($scope.editAttTimeOut);
            $scope.attWorkDay = angular.copy($scope.editAttWorkDay);
            $scope.attDay = angular.copy($scope.editAttDay);
            $scope.attAbsDay = angular.copy($scope.editAttAbsDay);
            $scope.attLate = angular.copy($scope.editAttLate);
            $scope.attEL = angular.copy($scope.editAttEL);
            $scope.attLeave = angular.copy($scope.editAttLeave);
            $scope.attSL = angular.copy($scope.editAttSL);
            $scope.attOThrs = angular.copy($scope.editAttOThrs);
            $scope.attOT = angular.copy($scope.editAttOT);

        });
    }

    $scope.updateAttendance = function(mID){
        var editJSON = {};
        var main = {};

        $scope.edtValArr = {
            name: $scope.editAttName,
            department: $scope.editAttDept,
            shift: $scope.editAttShift,
            dates: $scope.editAttDates,
            time_in: $scope.editAttTimeIn,
            time_out: $scope.editAttTimeOut,
            workday: $scope.editAttWorkDay,
            attend_day: $scope.editAttDay,
            absence_day: $scope.editAttAbsDay,
            lateness: $scope.editAttLate,
            early_leave: $scope.editAttEL,
            leaved: $scope.editAttLeave,
            sickleave: $scope.editAttSL,
            ot_hrs: $scope.editAttOThrs,
            ot: $scope.editAttOT
        };

        var name = editAttName;
        var department = editAttDept;
        var shift = editAttShift;
        var dates = editAttDates;
        var time_in = editAttTimeIn;
        var time_out = editAttTimeOut;
        var workday = editAttWorkDay;
        var attend_day = editAttDay;
        var absence_day = editAttAbsDay;
        var lateness = editAttLate;
        var early_leave = editAttEL;
        var leaved = editAttLeave;
        var sickleave = editAttSL;
        var ot_hrs = editAttOThrs;
        var ot = editAttOT;
        if(uname==$scope.attName){
            username = 'same_value';
        }
        if(utype==$scope.attName){
            usertype = 'same_value';
        }
        $rootScope.loader = true;
        adminService.updateAttendance(userID,name,department,shift,dates,time_in,time_out,workday,attend_day,absence_day,lateness,early_leave,leaved,sickleave,ot_hrs,ot)
            .then(function(data){
                alert(data.data);
                if(data.data == "Success"){
                    adminService.editAttendee()
                        .then(function(data){
                            $scope.userList = data.data;
                            $rootScope.loader = false;
                        });
                }else{
                    $rootScope.loader = false;
                }
            });

    }

    }

    $scope.cancelEdit = function(){
       $scope.activepage = 'main';
        editJSON = {};
        main = {};
        // areas = {};
        // skintype = {};
        // condition = {};
        // preference = {};
        // prodlink = [];
        // barcode = [];
        // texture = {};
        // appliedIDArr = {};
        // skintypeIDArr = {};
        // skinconditionIDArr = {};
        // skinpreferenceIDArr = {};
        // $scope.appliedID = {};
        // $scope.skintypeID = {};
        // $scope.skinconditionID = {};
        // $scope.skinpreferenceID = {};
    }

    // $scope.delAttendance = function(userID, name){
    //     $scope.aID  = userID;
    //     $scope.name = name;
    // }

    // $scope.DELETEMODAL = function (aID){
    //     $rootScope.loader = true;
    //     attendService.delAttendee(aID)
    //     .then(function(data){
    //         $rootScope.loader = false;
    //         alert(data.data);
    //         $scope.attendList();
    //     });
        
    // }

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

    $("#checkAll").change(function () {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.attendanceList, function(userList) {
            userList.selected = $scope.selectedAll;
            if($scope.selectedAll == true){
                if (deleteArray.indexOf(attendanceList.userID) == -1) {
                    deleteArray.push(attendanceList.userID);
                }
            }else{
                var index = deleteArray.indexOf(attendanceList.userID);
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
                attendService.delAttendee(deleteArray)
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

    $scope.data = [{"name":"","department":"","shift":"","dates":"","time_in":"","time_out":"","lateness":""},{"name":"","department":"","shift":"","dates":"","time_in":"","time_out":"","lateness":""},{"name":"","department":"","shift":"","dates":"","time_in":"","time_out":"","lateness":""},{"name":"","department":"","shift":"","dates":"","time_in":"","time_out":"","lateness":""},{"name":"","department":"","shift":"","dates":"","time_in":"","time_out":"","lateness":""},{"name":"","department":"","shift":"","dates":"","time_in":"","time_out":"","lateness":""},{"name":"","department":"","shift":"","dates":"","time_in":"","time_out":"","lateness":""},{"name":"","department":"","shift":"","dates":"","time_in":"","time_out":"","lateness":""}];
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
});