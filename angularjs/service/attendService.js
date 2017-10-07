ndmApp.factory('attendService', function($http,$q,$window) { 
	
	 var apiRouter = {
		// signupProcess: signupProcess,
		getAllAttendance: getAllAttendance,
		editAttendee: editAttendee,
		delAttendee: delAttendee,
		updateAttendance: updateAttendance
	 };
	 return apiRouter;

	function getAllAttendance() {
		return $http({
			method: 'get',
			url: rootURL + '/getAllAttendance/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function editAttendee(id) {
		return $http({
			method: 'get',
			url: rootURL + '/attendance/item/' + id,
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	// function delAttendee(userID){
	// 	return $http({
	// 		method: 'delete',
	// 		url: rootURL + '/delAttendee/' + id,
	// 		data: $.param({
	// 			id: id 
	// 		}),
	// 		headers: {
	// 				'Content-Type': 'application/x-www-form-urlencoded'
	// 			}
	// 	})
	// }

	function delAttendee(userDel) {
		return $http({
			method: 'post',
			url: rootURL + '/delAllAttendee/',
			data: $.param({userDel: userDel}),
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function updateAttendance(userID,name,department,shift,dates,time_in,time_out,workday,attend_day,absence_day,lateness,early_leave,leaved,sickleave,ot_hrs,ot) {
		return $http({
			method: 'post',
			url: rootURL + '/updateAttendance/',
			data: $.param({
        		userID: userID,
        		name: name,
        		department: department,
        		shift: shift,
        		dates: dates,
        		time_in: time_in,
        		time_out: time_out,
        		workday: workday,
        		attend_day: attend_day,
        		absence_day: absence_day,
        		lateness: lateness,
        		early_leave: early_leave,
        		leaved: leaved,
        		sickleave: sickleave,
        		ot_hrs: ot_hrs,
        		ot: ot
			}),
			headers: {
                    'Content-Type': 'application/json'
                }
		});
	 }
});