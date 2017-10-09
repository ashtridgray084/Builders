ndmApp.controller('scheduleCtrl', function($scope, $window, $rootScope, scheduleService){
    $rootScope.usertype = localStorage.usertype;

    $rootScope.memberinfo_mgt = localStorage.memberinfo_mgt;
    $rootScope.attendance_mgt = localStorage.attendance_mgt;
    $rootScope.schedule_mgt = localStorage.schedule_mgt;
    $rootScope.salary_mgt = localStorage.salary_mgt;
    $rootScope.usersettings_mgt = localStorage.usersettings_mgt;
    $rootScope.accesssettings_mgt = localStorage.accesssettings_mgt;
    renewCacheTime();

    $scope.activepage = "main";

    // $scope.employees = employees;

    scheduleService.getAllSchedule()
        .then(function(data){
            $scope.scheduleList = data.data;
            console.log( $scope.scheduleList);
        });

    scheduleService.getDepartmentSchedule()
        .then(function(data){
            $scope.deptSchedList = data.data;
            console.log( $scope.deptSchedList);
        });

    $scope.dataDeptLoad = function(){
        
    }

    $scope.dataDeptSchedule = function(department){
        scheduleService.dataDeptSchedule(department)
        .then(function(data){
            $scope.deptSchedList = data.data;
            console.log( $scope.deptSchedList);
        });
    }
    


    scheduleService.getShift()
        .then(function(data){
            $scope.shiftList = data.data;
            console.log( $scope.shiftList);
        });

    scheduleService.getTime()
        .then(function(data){
            $scope.timeList = data.data;
            console.log( $scope.timeList);
        });

    scheduleService.getWeeks()
        .then(function(data){
            $scope.weeksList = data.data;
            console.log( $scope.weeksList);
        });

    $scope.scheuleListData = function(){
        scheduleService.getAllSchedule()
        .then(function(data){
            $scope.scheduleList = data.data;
        });
    }

    $scope.editSchedule = function(id){
        $scope.activepage = 'edit';
        // $scope.MainID = id;
        // $scope.attID = userID;
        // $scope.attName = name;
        // $scope.attEmail = email;
        // $scope.memberNameOrig = angular.copy($scope.mailNameEdit);
        // $scope.memberEmailOrig = angular.copy($scope.mailEmailEdit);
        attendService.editSchedule(id)
        .then(function(data){
            $rootScope.loader = false;

            // Original Values
            $scope.schedID = data.data[0].id;
            $scope.scheduID = data.data[0].userID;
            $scope.schedName = data.data[0].name;
            $scope.schedDept = data.data[0].department;
            $scope.schedShift = data.data[0].shift;
            $scope.schedDates = data.data[0].dates;
            $scope.schedTimed = data.data[0].timed;
            $scope.schedWeeks = data.data[0].weeks;

            // Edit Values
            $scope.editSchedID = data.data[0].id;
            $scope.editScheduID = data.data[0].userID;
            $scope.editSchedName = data.data[0].name;
            $scope.editSchedDept = data.data[0].department;
            $scope.editSchedShift = data.data[0].shift;
            $scope.editSchedDates = data.data[0].dates;
            $scope.editSchedTimed = data.data[0].timed;
            $scope.editSchedWeeks = data.data[0].weeks;

            $scope.orgValArr = {
                name: $scope.schedName,
                department: $scope.schedDept,
                shift: $scope.schedShift,
                dates: $scope.schedDates,
                timed: $scope.schedTimed,
                weeks: $scope.schedWeeks
            };
            
            $scope.schedName = angular.copy($scope.editSchedName);
            $scope.schedDept = angular.copy($scope.editSchedDept);
            $scope.schedShift = angular.copy($scope.editSchedShift);
            $scope.schedDates = angular.copy($scope.editSchedDates);
            $scope.schedTimed = angular.copy($scope.editSchedTimed);
            $scope.schedWeeks = angular.copy($scope.editSchedWeeks);

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

    // }

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
});