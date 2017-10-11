ndmApp.factory('adminService', function($http,$q,$window) { 
	
	 var apiRouter = {
		signupProcess: signupProcess,
		getCurrentAccess: getCurrentAccess,
		getAllMemberInfo: getAllMemberInfo,
		editMember: editMember,
		getUserType: getUserType,
		getProfile: getProfile,
		getAllUserInfo: getAllUserInfo,
		saveMemberInfo: saveMemberInfo,
		delMember: delMember
	 };
	 return apiRouter;
	  
	function signupProcess(fname,mname,lname,age,gender,status,birthdate,nationality,address,phone,email,username,password,usertype) {
		return $http({
			method: 'post',
			url: rootURL + '/signup/',
			data: $.param({
				fname: fname,
				mname: mname,
                lname: lname,
                age: age,
                gender: gender,
                status: status,
                birthdate: birthdate,
                nationality: nationality,
                address: address,
                phone: phone,
                email: email,
                username: username,
                password: password,
                usertype: usertype
			}),
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function getCurrentAccess(username) {
		return $http({
			method: 'get',
			url: rootURL + '/getCurrentAccess/' + username,
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function getAllMemberInfo() {
		return $http({
			method: 'get',
			url: rootURL + '/getAllMemberInfo/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function editMember(id) {
		return $http({
			method: 'get',
			url: rootURL + '/member/item/' + id,
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function getProfile(username) {
		return $http({
			method: 'post',
			url: rootURL + '/getProfile/',
			data: $.param({username: username}),
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	} 

	function getUserType() {
		return $http({
			method: 'get',
			url: rootURL + '/getUserType/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function getAllUserInfo() {
		return $http({
			method: 'get',
			url: rootURL + '/getAllUserInfo/',
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function saveMemberInfo(userID,email,fname,lname,mname,age,gender,status,phone,nationality,birthdate,address,username) {
		return $http({
			method: 'post',
			url: rootURL + '/saveMemberInfo/',
			data: $.param({
				userID: userID,
				email: email,
				fname: fname,
				lname: lname,
				mname: mname,
				age: age,
				gender: gender,
				status: status,
				phone: phone,
				nationality: nationality,
				birthdate: birthdate,
				address: address,
				username: username
			}),
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}

	function delMember(userDel) {
		return $http({
			method: 'post',
			url: rootURL + '/delAllMember/',
			data: $.param({userDel: userDel}),
			headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
		})
	}
	 
});