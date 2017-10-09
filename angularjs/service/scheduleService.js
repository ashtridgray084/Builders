ndmApp.factory('scheduleService', function($http,$q,$window) { 
	
	 var apiRouter = {
		// signupProcess: signupProcess,
		getAllSchedule: getAllSchedule,
		editSchedule: editSchedule,
		delSchedule: delSchedule,
		updateSchedule: updateSchedule,
		getDepartment: getDepartment,
		getShift: getShift,
		getTime: getTime,
		getWeeks: getWeeks,
		getDepartmentSchedule: getDepartmentSchedule,
		dataDeptSchedule: dataDeptSchedule
	 };
	 return apiRouter;

	function getAllSchedule() {
		return $http({
			method: 'get',
			url: rootURL + '/getAllSchedule/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function getDepartment() {
		return $http({
			method: 'get',
			url: rootURL + '/getDepartment/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function getShift() {
		return $http({
			method: 'get',
			url: rootURL + '/getShift/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function getTime() {
		return $http({
			method: 'get',
			url: rootURL + '/getTime/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function getWeeks() {
		return $http({
			method: 'get',
			url: rootURL + '/getWeeks/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function editSchedule(id) {
		return $http({
			method: 'get',
			url: rootURL + '/schedule/item/' + id,
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function getDepartmentSchedule() {
		return $http({
			method: 'get',
			url: rootURL + '/getDepartmentSchedule/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function dataDeptSchedule(department) {
		return $http({
			method: 'post',
			url: rootURL + '/schedule/dataDept/',
			data: $.param({department: department}),
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

	function delSchedule(userDel) {
		return $http({
			method: 'post',
			url: rootURL + '/delAllSchedule/',
			data: $.param({userDel: userDel}),
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function updateSchedule(userID,name,department,shift,dates,timed,weeks) {
		return $http({
			method: 'post',
			url: rootURL + '/updateSchedule/',
			data: $.param({
        		userID: userID,
        		name: name,
        		department: department,
        		shift: shift,
        		dates: dates,
        		timed: timed,
        		weeks: weeks
			}),
			headers: {
                    'Content-Type': 'application/json'
                }
		});
	 }
});