function logout(){
	localStorage.removeItem('username');
	localStorage.removeItem('usertype');
	localStorage.removeItem('memberinfo_mgt');
	localStorage.removeItem('attendance_mgt');
	localStorage.removeItem('schedule_mgt');
	localStorage.removeItem('salary_mgt');
	// localStorage.removeItem('usersettings_mgt');
	// localStorage.removeItem('accesssettings_mgt');
	localStorage.removeItem('timeIn');
}
