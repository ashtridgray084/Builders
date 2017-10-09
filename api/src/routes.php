<?php
// Routes
include("localDB.php");
// include("ndm_functions.php");

/***** Sign Up API ******/
$app->post('/signup/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $signupParams = $request->getParsedBody();
  // echo $signupParams['fname'];
  $usertype = $signupParams['usertype'];
  $fname = $signupParams['fname'];
  $mname = $signupParams['mname'];
  $lname = $signupParams['lname'];
  $email = $signupParams['email'];
  $username = $signupParams['username'];
  $password = $signupParams['password'];
  $age = $signupParams['age'];
  $gender = $signupParams['gender'];
  $birthdate = $signupParams['birthdate'];
  $nationality = $signupParams['nationality'];
  $address = $signupParams['address'];
  $phone = $signupParams['phone'];
  $status = $signupParams['status'];
  // check duplicate entry
  $stmt = $dbLocal->prepare("SELECT * FROM bk_user WHERE Username = :username");
  $stmt->bindParam(':username', $username);
  
  //Check whether the query was successful or not in duplicate entry detection
  if($stmt->execute()) {
      if($stmt->rowCount() == -1) {
          echo "Username Taken";
      }else{
          // insert if new data
      $stmt = $dbLocal->prepare("INSERT INTO bk_user (Username, Password, User_Type)VALUES(:username, :password, :usertype)");
      $stmt->bindParam(':username', $username);
      $stmt->bindParam(':password', $password);
      $stmt->bindParam(':usertype', $usertype);
  
        //Check whether the query was successful or not in inserting new data
        if($stmt->execute()) {
          $userID = $dbLocal->lastInsertId();
          // insert profile data
          $stmt1 = $dbLocal->prepare("INSERT INTO bk_user_profile (userID, first_name, middle_name, last_name, email, password, age, gender, birthdate, nationality, address, phone, status) VALUES (:userID, :first_name, :middle_name, :last_name, :email, :password, :age, :gender, :birthdate, :nationality, :address, :phone, :status)");
          $stmt1->bindParam(':userID', $userID);
          $stmt1->bindParam(':first_name', $fname);
          $stmt1->bindParam(':middle_name', $mname);
          $stmt1->bindParam(':last_name', $lname);
          $stmt1->bindParam(':email', $email);
          $stmt1->bindParam(':password', $password);
          $stmt1->bindParam(':age', $age);
          $stmt1->bindParam(':gender', $gender);
          $stmt1->bindParam(':birthdate', $birthdate);
          $stmt1->bindParam(':nationality', $nationality);
          $stmt1->bindParam(':address', $address);
          $stmt1->bindParam(':phone', $phone);
          $stmt1->bindParam(':status', $status);
          $stmt2 = $dbLocal->prepare("INSERT INTO bk_user_access (userID, memberinfo_mgt, attendance_mgt, schedule_mgt, salary_mgt) VALUES (:userID, 1,1,1,1)");
          $stmt2->bindParam(':userID', $userID);
      
          //Check whether the query was successful or not in inserting new data
          if($stmt1->execute() && $stmt2->execute()) {
            echo "Success";
          }else{
              echo "Failed to save record";
          }
        }else{
            echo "Failed to save record";
        }
      }
  }else{
      echo "sql error";
  }

});


/***** Login API ******/
$app->post('/login/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $loginParams = $request->getParsedBody();
  $loginData = array();

  $username = $loginParams['username'];
  $password = $loginParams['password'];
  $ipadd = $_SERVER['REMOTE_ADDR'];
  // prepare sql and bind parameters
  
  $stmt = $dbLocal->prepare("SELECT * FROM bk_user WHERE Username = :username AND Password = :password");
  $stmt->bindParam(':username', $username);
  $stmt->bindParam(':password', $password);
  
  //Check whether the query was successful or not
  if($stmt->execute()) {
    $usertype="";
    $result = $stmt->fetchAll();
    foreach ($result as $rowValue) {
  
    $usertype= $rowValue['User_Type'];
    
    }
      if(!empty($usertype)) {
        $dbval = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $status = "success";
        $loginData[] = array("status" => $status, "usertype" => $usertype);
        //record in login history
        $stmt = $dbLocal->prepare("INSERT INTO bk_login_history (username,ip) VALUES(:username,:ipadd)");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':ipadd', $ipadd);
        $stmt->execute();
        echo json_encode($loginData);
      }else{
        $status = "failed";
        $usertype = "none";
        $loginData[] = array("status" => $status, "usertype" => $usertype);
          echo json_encode($loginData);
      }
  }else{
    $status = "sql error";
    $usertype = "none";
    $loginData[] = array("status" => $status, "usertype" => $usertype);
    echo json_encode($loginData);
  }
});


/***** Administrator API *****/
//Get Specific User Access by ID
$app->get('/getCurrentAccess/{username}', function ($request, $response, $args) {
  // $dbLocal = $this->db_local;
  $dbLocal = $this->db_local;
  $username = $args['username'];
  $accessListData = array();
  // prepare sql and bind parameters
  // $stmt = $dbLocal->prepare("SELECT BK_User_Access.*, BK_User.Username FROM BK_User_Access JOIN BK_User ON BK_User.userID = BK_User_Access.userID WHERE BK_User.Username = :username");
  $stmt = $dbLocal->prepare("SELECT bk_user_access.*, bk_user.Username FROM bk_user_access JOIN bk_user ON bk_user.userID = bk_user_access.userID WHERE bk_user.Username = :username");
  $stmt->bindParam(':username', $username);
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $accessListData[] = array(
      "userID"          => $row['userID'],
      "username"          => $row['Username'],
      "memberinfo_mgt"     => $row['memberinfo_mgt'],
      "attendance_mgt"       => $row['attendance_mgt'],
      "schedule_mgt"       => $row['schedule_mgt'],
      "salary_mgt"       => $row['salary_mgt']
      // "usersettings_mgt"       => $row['usersettings_mgt'],
      // "accesssettings_mgt"       => $row['accesssettings_mgt']

        );
  }
  echo json_encode($accessListData);
});
/***** Update User Access Function *****/
function accessColumnName($db_index){
    if($db_index == 1){
        $column_name = 'memberinfo_mgt';
    }elseif($db_index == 2){
        $column_name = 'attendance_mgt';
    }elseif($db_index == 3){
        $column_name = 'schedule_mgt';
    }elseif($db_index == 4){
        $column_name = 'salary_mgt';
    }
    // elseif($db_index == 5){
    //     $column_name = 'usersettings_mgt';
    // }elseif($db_index == 6){
    //     $column_name = 'accesssettings_mgt';
    // }
    return $column_name;
}

//Get All User Access List
$app->get('/getAllAccess/', function ($request, $response, $args) {
  // $dbLocal = $this->db_local;
  $dbLocal = $this->db_local;
  $accessListData = array();

  // $username = $profileParams['username'];
  // prepare sql and bind parameters
  $stmt = $dbLocal->prepare("SELECT bk_user_access.*, bk_user.Username FROM bk_user_access JOIN bk_user ON bk_user.userID = bk_user_access.userID");
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $accessListData[] = array(
      "userID"          => $row['userID'],
      "username"          => $row['Username'],
      "member_info"     => $row['member_info'],
      "attendance"       => $row['attendance'],
      "schedule"       => $row['schedule'],
      "salary"       => $row['salary']
    );
  }
  echo json_encode($accessListData);
});

//Update Column Access by User ID
$app->post('/updateAccess/', function ($request, $response, $args) {
  // $dbLocal = $this->db_local;
  $dbLocal = $this->db_local;
  $updateAccessParams = $request->getParsedBody();
  $userID = $updateAccessParams['userID'];
  $db_index = $updateAccessParams['db_index'];
  $db_column = accessColumnName($db_index);
  //Check duplicate entry
  $stmt = $dbLocal->prepare("SELECT $db_column FROM bk_user_access WHERE userID = :userID");
  $stmt->bindParam(':userID', $userID);
  $stmt->execute();
  $dbval = $stmt->fetch(PDO::FETCH_ASSOC);
    $colVal = $dbval[$db_column];
    if($colVal == 1){
      $enterVal = 0;
    }else{
      $enterVal = 1;
    }
  // save data to db
  $stmt = $dbLocal->prepare("UPDATE bk_user_access SET $db_column = :enterVal WHERE userID = :userID");
  $stmt->bindParam(':userID', $userID);
  $stmt->bindParam(':enterVal', $enterVal);
    
  //Check whether the query was successful or not in updating data
  if($stmt->execute()) {
    echo "Success";
  }else{
    echo "Failed";
  }
});

//Get All User Info in bk_user
$app->get('/getUserType/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $profileParams = $request->getParsedBody();
  $userTypeData = array();

  $stmt = $dbLocal->prepare("SELECT DISTINCT User_Type FROM bk_user");
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $userTypeData[] = array(
      "usertype"  => $row['User_Type']
        );
  }
  echo json_encode($userTypeData);
});

/***** Member Info API *****/
//Get All User Info in bk_user
$app->get('/getAllUserInfo/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $profileParams = $request->getParsedBody();
  $userListData = array();

  $stmt = $dbLocal->prepare("SELECT * FROM bk_user");
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $userListData[] = array(
      "userID"  => $row['userID'],
      "username"  => $row['Username'],
      "usertype"  => $row['User_Type']
        );
  }
  echo json_encode($userListData);
});

//ALL Get Table by id
$app->get('/{tablecode}/item/{id}', function ($request, $response, $args) {
   
  $tb_code = $args['tablecode'];
  $id = $args['id'];
  $dbLocal = $this->db_local;
  $query = "";
  
  if($tb_code == "user") $query = "SELECT * FROM bk_user WHERE userID=$id";
  elseif($tb_code == "member") $query = "SELECT * FROM bk_user_profile WHERE userID=$id";
  elseif($tb_code == "attendance") $query = "SELECT * FROM attendance_tbl WHERE userID=$id";
  elseif($tb_code == "schedule") $query = "SELECT * FROM schedule_tbl WHERE userID=$id";
  elseif($tb_code == "salary" ) $query ="SELECT * FROM salary_tbl WHERE userID=$id";
  
  
  $stmt = $dbLocal->query($query);
  $result =  $stmt->fetchAll(PDO::FETCH_ASSOC);
  
  echo json_encode($result);
  
});

//ALL Get Table by id
$app->post('/{tablecode}/dataDept/', function ($request, $response, $args) {
  $deptParams = $request->getParsedBody();
  // $userListData = array(); 
  $tb_code = $args['tablecode'];
  $department = $deptParams['department'];
  $dbLocal = $this->db_local;
  $query = "";
  
  if($tb_code == "attendance") $query = "SELECT * FROM attendance_tbl WHERE department='$department'";
  elseif($tb_code == "schedule") $query = "SELECT * FROM schedule_tbl WHERE department='$department'";
  elseif($tb_code == "salary" ) $query ="SELECT * FROM salary_tbl WHERE department='$department'";
  
  
  $stmt = $dbLocal->query($query);
  $result =  $stmt->fetchAll(PDO::FETCH_ASSOC);
  
  echo json_encode($result);
  
});

$app->post('/saveMemberInfo/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $updateMemberParams = $request->getParsedBody();
  $userID = $updateMemberParams['userID'];
  $fname = $updateMemberParams['fname'];
  $lname = $updateMemberParams['lname'];
  $mname = $updateMemberParams['mname'];
  $age = $updateMemberParams['age'];
  $gender = $updateMemberParams['gender'];
  $status = $updateMemberParams['status'];
  $birthdate = $updateMemberParams['birthdate'];
  $nationality = $updateMemberParams['nationality'];
  $address = $updateMemberParams['address'];
  $phone = $updateMemberParams['phone'];
  $email = $updateMemberParams['email'];
  $username = $updateMemberParams['username'];

  if($username == 'same_value'){
    //Check whether the query was successful or not in updating data
    $stmt = $dbLocal->prepare("UPDATE BK_User_Profile SET email = :email, first_name = :fname, last_name = :lname, middle_name = :mname, age = :age, gender = :gender, status = :status, phone = :phone, nationality =  :nationality, birthdate = :birthdate, address = :address WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':email', $email);
      $stmt->bindParam(':fname', $fname);
      $stmt->bindParam(':lname', $lname);
      $stmt->bindParam(':mname', $mname);
      $stmt->bindParam(':age', $age);
      $stmt->bindParam(':gender', $gender);
      $stmt->bindParam(':status', $status);
      $stmt->bindParam(':phone', $phone);
      $stmt->bindParam(':nationality', $nationality);
      $stmt->bindParam(':birthdate', $birthdate);
      $stmt->bindParam(':address', $address);

    //Check whether the query was successful or not in updating data
    if($stmt->execute()) {
      echo "Success";
    }else{
      echo "Failed to save data to BK_User_Profile";
    }
  }else{
    //Check duplicate username
    $stmt = $dbLocal->prepare("SELECT * FROM BK_User WHERE Username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    if($stmt->rowCount() == -1) {
      echo "Username " . $username . " already exists.\n";
    }else{
    // save data to db
      // $stmt = $dbLocal->prepare("UPDATE BK_User_Profile SET first_name = :fname, middle_name = :mname, last_name =  :lname WHERE userID = :userID");
      //   $stmt->bindParam(':userID', $userID);
      //   $stmt->bindParam(':fname', $fname);
      //   $stmt->bindParam(':mname', $mname);
      //   $stmt->bindParam(':lname', $lname);
      
      //Check whether the query was successful or not in updating data
      if($stmt->execute()) {
        $stmt = $dbLocal->prepare("UPDATE BK_User_Profile SET email = :email, first_name = :fname, last_name = :lname, middle_name = :mname, age = :age, gender = :gender, status = :status, phone = :phone, nationality =  :nationality, birthdate = :birthdate, address = :address WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':email', $email);
      $stmt->bindParam(':fname', $fname);
      $stmt->bindParam(':lname', $lname);
      $stmt->bindParam(':mname', $mname);
      $stmt->bindParam(':age', $age);
      $stmt->bindParam(':gender', $gender);
      $stmt->bindParam(':status', $status);
      $stmt->bindParam(':phone', $phone);
      $stmt->bindParam(':nationality', $nationality);
      $stmt->bindParam(':birthdate', $birthdate);
      $stmt->bindParam(':address', $address);
    
        //Check whether the query was successful or not in updating data
        if($stmt->execute()) {
          echo "Success";
        }else{
            echo "Failed to save data to BK_User_Profile";
        }
      }else{
          echo "Failed to save data to BK_User table";
      }
    }
  }
});

//Get User Info by ID
// $app->get('/getUserInfo/{id}', function ($request, $response, $args) {
//   $dbLocal = $this->db_local;
//   $profileParams = $request->getParsedBody();
//   $id = $args['id'];
//   $userListData = array();

//   // $username = $profileParams['username'];
//   // prepare sql and bind parameters
//   // $stmt = $dbLocal->prepare("SELECT * FROM BK_User");
//   $stmt = $dbLocal->prepare("SELECT * FROM bk_user WHERE userID = :id");
//   $stmt->bindParam(':id', $id);
//   $stmt->execute();
//     $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
//   foreach ($res as $row){
//     $userListData[] = array(
//       "userID"  => $row['userID'],
//       "username"  => $row['Username'],
//       "usertype"  => $row['User_Type']
//         );
//   }
//   echo json_encode($userListData);
// });

//Get All Member Info in bk_user_profile
$app->get('/getAllMemberInfo/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $profileParams = $request->getParsedBody();
  $userListData = array();

  $stmt = $dbLocal->prepare("SELECT * FROM bk_user_profile");
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $userListData[] = array(
      "userID"  => $row['userID'],
      "first_name"  => $row['first_name'],
      "middle_name"  => $row['middle_name'],
      "last_name"  => $row['last_name'],
      "age"  => $row['age'],
      "gender"  => $row['gender'],
      "status"  => $row['status'],
      "birthdate"  => $row['birthdate'],
      "nationality"  => $row['nationality'],
      "address"  => $row['address'],
      "phone"  => $row['phone'],
      "email"  => $row['email']
    );
  }
  echo json_encode($userListData);
});

//Get Member Info by ID
// $app->post('/getMemberInfo/{userID}', function ($request, $response, $args) {
//   $dbLocal = $this->db_local;
//   $profileParams = $request->getParsedBody();
//   $userID = $args['userID'];
//   $userListData = array();

//   // $userID = $profileParams['userID'];

//   // $username = $profileParams['username'];
//   // prepare sql and bind parameters
//   // $stmt = $dbLocal->prepare("SELECT * FROM BK_User");
//   $stmt = $dbLocal->prepare("SELECT * FROM bk_user_profile WHERE userID = :userID");
//   $stmt->bindParam(':userID', $userID);
//   $stmt->execute();
//   $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
//   foreach ($res as $row){
//     $userListData[] = array(
//       "userID"  => $row['userID'],
//       "fname"  => $row['first_name'],
//       // "mname"  => $row['middle_name'],
//       "lname"  => $row['last_name'],
//       // "age"  => $row['age'],
//       // "gender"  => $row['gender'],
//       // "status"  => $row['status'],
//       // "birthdate"  => $row['birthdate'],
//       // "nationality"  => $row['nationality'],
//       // "address"  => $row['address'],
//       // "phone"  => $row['phonenumber'],
//       "email"  => $row['email']
//         );
//   }
//   echo json_encode($userListData);
// });

$app->post('/getUserProfile/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $profileParams = $request->getParsedBody();
  $profileData = array();

  $username = $profileParams['username'];
  // prepare sql and bind parameters
  $stmt = $dbLocal->prepare("SELECT * FROM BK_User WHERE Username = :username ");
  $stmt->bindParam(':username', $username);
  
  //Check whether the query was successful or not
  if($stmt->execute()) {
    $dbval = $stmt->fetchAll(PDO::FETCH_ASSOC);
      $userID = $dbval['userID'];
      if($stmt->rowCount() == -1) {
          // prepare sql and bind parameters
      $stmt = $dbLocal->prepare("SELECT * FROM BK_User_Profile WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->execute();
      $dbval = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $first_name = $dbval['first_name'];
        $last_name = $dbval['last_name'];
        $email = $dbval['email'];
        // echo $first_name . "\n" . $last_name . "\n" . $email;
        $profileData[] = array("userID" => $userID, "first_name" => $first_name, "last_name" => $last_name, "username" => $username, "email" => $email);
        echo json_encode($profileData);
      }else{
          echo "failed";
      }
  }else{
      echo "sql error";
  }
});

//Update Member Info by ID
$app->post('/updateMemberInfo/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $updateMemberParams = $request->getParsedBody();
  $userID = $updateMemberParams['userID'];
  $fname = $updateMemberParams['fname'];
  $mname = $updateMemberParams['mname'];
  $lname = $updateMemberParams['lname'];
  $age = $updateMemberParams['age'];
  $gender = $updateMemberParams['gender'];
  $status = $updateMemberParams['status'];
  $birthdate = $updateMemberParams['birthdate'];
  $nationality = $updateMemberParams['nationality'];
  $address = $updateMemberParams['address'];
  $phone = $updateMemberParams['phone'];
  $email = $updateMemberParams['email'];
  $username = $updateMemberParams['username'];

  if($username == 'same_value'){
    //Check whether the query was successful or not in updating data
    $stmt = $dbLocal->prepare("UPDATE BK_User_Profile SET first_name = :fname, middle_name = :mname, last_name =  :lname, age =  :age, gender =  :gender, status =  :status, nationality =  :nationality, address =  :address, phonenumber =  :phone, birthdate =  :birthdate, email = :email WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':fname', $fname);
      $stmt->bindParam(':mname', $mname);
      $stmt->bindParam(':lname', $lname);
      $stmt->bindParam(':age', $age);
      $stmt->bindParam(':gender', $gender);
      $stmt->bindParam(':status', $status);
      $stmt->bindParam(':birthdate', $birthdate);
      $stmt->bindParam(':nationality', $nationality);
      $stmt->bindParam(':address', $address);
      $stmt->bindParam(':phone', $phone);
      $stmt->bindParam(':email', $email);

    //Check whether the query was successful or not in updating data
    if($stmt->execute()) {
      echo "Success";
    }else{
      echo "Failed to save data to BK_User_Profile";
    }
  }else{
    //Check duplicate username
    $stmt = $dbLocal->prepare("SELECT * FROM BK_User WHERE Username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    if($stmt->rowCount() == -1) {
      echo "Username " . $username . " already exists.\n";
    }else{
    // save data to db
      $stmt = $dbLocal->prepare("UPDATE BK_User SET Username = :username WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':username', $username);
      
      //Check whether the query was successful or not in updating data
      if($stmt->execute()) {
        $stmt = $dbLocal->prepare("UPDATE BK_User_Profile SET first_name = :fname, middle_name = :mname, last_name =  :lname, age =  :age, gender =  :gender, status =  :status, nationality =  :nationality, address =  :address, phone =  :phone, birthdate =  :birthdate, email = :email WHERE userID = :userID");
        $stmt->bindParam(':userID', $userID);
        $stmt->bindParam(':fname', $fname);
        $stmt->bindParam(':mname', $mname);
        $stmt->bindParam(':lname', $lname);
        $stmt->bindParam(':age', $age);
        $stmt->bindParam(':gender', $gender);
        $stmt->bindParam(':status', $status);
        $stmt->bindParam(':birthdate', $birthdate);
        $stmt->bindParam(':nationality', $nationality);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':email', $email);
    
        //Check whether the query was successful or not in updating data
        if($stmt->execute()) {
          echo "Success";
        }else{
            echo "Failed to save data to BK_User_Profile";
        }
      }else{
          echo "Failed to save data to BK_User table";
      }
    }
  }
});

//Delete Member Info by ID
$app->delete('/delUser/{id}', function ($request, $response, $args){
    $id = $request->getAttribute('id');
    // $id = $delParams['id'];
    $sql = "DELETE FROM bk_user WHERE userID=:id";
    $sql1 = "DELETE FROM bk_user_profile WHERE profileID=:id";
    $sql2 = "DELETE FROM bk_user_access WHERE accessID=:id";
    try {
        $db = $this->db_local;
        $stmt = $db->prepare($sql);
        $stmt1 = $db->prepare($sql1);
        $stmt2 = $db->prepare($sql2);
        $stmt->bindParam(':id', $id);
        $stmt1->bindParam(':id', $id);
        $stmt2->bindParam(':id', $id);
        $stmt->execute();
        $stmt1->execute();
        $stmt2->execute();
        // $db = null;
     echo '{"error":{"text":"successfully! deleted Records"}}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});


/***** Attendance API ******/
//get All Attendees in List
$app->get('/getAllAttendance/', function ($request, $response, $args) {
  //access database $db_local to localDB
  $db = $this->db_local;
  //make the list array to request
  $attendListData = array();

  // prepare sql and bind parameters
  $stmt = $db->prepare("SELECT * FROM attendance_tbl");
  $stmt->execute();
    //fetch the array response
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //loop array in forEach
    foreach ($res as $row){
      //array the list of response
      $attendListData[] = array(
        "userID"     => $row['userID'],
        "name"   => $row['name'],
        "department"      => $row['department'],
        "shift"      => $row['shift'],
        "dates"      => $row['dates'],
        "shift"        => $row['shift'],
        "time_in"     => $row['time_in'],
        "time_out"     => $row['time_out'],
        "workday"    => $row['workday'],
        "attend_day"    => $row['attend_day'],
        "absence_day"       => $row['absence_day'],
        "lateness"      => $row['lateness'],
        "early_leave"        => $row['early_leave'],
        "sickleave"        => $row['sickleave'],
        "leaved"   => $row['leaved'],
        "ot_hrs"   => $row['ot_hrs'],
        "ot"   => $row['ot']
      );
    }
    //display the output response
    echo json_encode($attendListData);
});

//Get Attendee By ID
// $app->get('/getAttendance/{id}', function ($request, $response, $args) {
//   //access database $db_local to localDB
//   $db = $this->db_local;
//   //define parameter to get by ID
//   $id = $args['id'];
//   //make the list array to request
//   $attendListData = array();

//   // prepare sql and bind parameters
//   $stmt = $db->prepare("SELECT * FROM attendance_tbl WHERE userID=:id");
//   $stmt->bindParam(':id', $id);
//   $stmt->execute();
//     //fetch the array response
//     $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
//     //loop array in forEach
//     foreach ($res as $row){
//       //array the list of response
//       $attendListData[] = array(
//         "userID"     => $row['userID'],
//         "name"   => $row['name'],
//         "department"      => $row['department'],
//         "shift"      => $row['shift'],
//         "dates"      => $row['dates'],
//         "shift"        => $row['shift'],
//         "time_in"     => $row['time_in'],
//         "time_out"     => $row['time_out'],
//         "workday"    => $row['workday'],
//         "attend_day"    => $row['attend_day'],
//         "absence_day"       => $row['absence_day'],
//         "lateness"      => $row['lateness'],
//         "early_leave"        => $row['early_leave'],
//         "sickleave"        => $row['sickleave'],
//         "leaved"   => $row['leaved'],
//         "ot_hrs"   => $row['ot_hrs'],
//         "ot"   => $row['ot']
//       );
//     }
//     //display the output response
//     echo json_encode($attendListData);
// });

//Update Attendance by ID
$app->post('/updateAttendance/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $updateAttendanceParams = $request->getParsedBody();
  $userID = $updateAttendanceParams['userID'];
  $name = $updateAttendanceParams['name'];
  $department = $updateAttendanceParams['department'];
  $shift = $updateAttendanceParams['shift'];
  $dates = $updateAttendanceParams['dates'];
  $time_in = $updateAttendanceParams['time_in'];
  $time_out = $updateAttendanceParams['time_out'];
  $workday = $updateAttendanceParams['workday'];
  $attend_day = $updateAttendanceParams['attend_day'];
  $absence_day = $updateAttendanceParams['absence_day'];
  $lateness = $updateAttendanceParams['lateness'];
  $early_leave = $updateAttendanceParams['early_leave'];
  $sickleave = $updateAttendanceParams['sickleave'];
  $leaved = $updateAttendanceParams['leaved'];
  $ot_hrs = $updateAttendanceParams['ot_hrs'];
  $ot = $updateAttendanceParams['ot'];
  $username = $updateAttendanceParams['username'];

  if($username == 'same_value'){
    //Check whether the query was successful or not in updating data
    $stmt = $dbLocal->prepare("UPDATE attendance_tbl SET name = :name, department = :department, shift =  :shift, dates =  :dates, time_in =  :time_in, time_out =  :time_out, workday =  :workday, attend_day =  :attend_day, absence_day =  :absence_day, lateness =  :lateness, early_leave = :early_leave, sickleave = :sickleave, leaved = :leaved, ot_hrs = :ot_hrs, ot = :ot WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':department', $department);
      $stmt->bindParam(':shift', $shift);
      $stmt->bindParam(':dates', $dates);
      $stmt->bindParam(':time_in', $time_in);
      $stmt->bindParam(':time_out', $time_out);
      $stmt->bindParam(':workday', $workday);
      $stmt->bindParam(':attend_day', $attend_day);
      $stmt->bindParam(':absence_day', $absence_day);
      $stmt->bindParam(':lateness', $lateness);
      $stmt->bindParam(':early_leave', $early_leave);
      $stmt->bindParam(':sickleave', $sickleave);
      $stmt->bindParam(':leaved', $leaved);
      $stmt->bindParam(':ot_hrs', $ot_hrs);
      $stmt->bindParam(':ot', $ot);

    //Check whether the query was successful or not in updating data
    if($stmt->execute()) {
      echo "Success";
    }else{
      echo "Failed to save data to BK_User_Profile";
    }
  }else{
    //Check duplicate username
    $stmt = $dbLocal->prepare("SELECT * FROM BK_User WHERE Username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    if($stmt->rowCount() == -1) {
      echo "Username " . $username . " already exists.\n";
    }else{
    // save data to db
      $stmt = $dbLocal->prepare("UPDATE BK_User SET Username = :username WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':username', $username);
      
      //Check whether the query was successful or not in updating data
      if($stmt->execute()) {
         $stmt = $dbLocal->prepare("UPDATE attendance_tbl SET name = :name, department = :department, shift =  :shift, dates =  :dates, time_in =  :time_in, time_out =  :time_out, workday =  :workday, attend_day =  :attend_day, absence_day =  :absence_day, lateness =  :lateness, early_leave = :early_leave, sickleave = :sickleave, leaved = :leaved, ot_hrs = :ot_hrs, ot = :ot WHERE userID = :userID");
          $stmt->bindParam(':userID', $userID);
          $stmt->bindParam(':name', $name);
          $stmt->bindParam(':department', $department);
          $stmt->bindParam(':shift', $shift);
          $stmt->bindParam(':dates', $dates);
          $stmt->bindParam(':time_in', $time_in);
          $stmt->bindParam(':time_out', $time_out);
          $stmt->bindParam(':workday', $workday);
          $stmt->bindParam(':attend_day', $attend_day);
          $stmt->bindParam(':absence_day', $absence_day);
          $stmt->bindParam(':lateness', $lateness);
          $stmt->bindParam(':early_leave', $early_leave);
          $stmt->bindParam(':sickleave', $sickleave);
          $stmt->bindParam(':leaved', $leaved);
          $stmt->bindParam(':ot_hrs', $ot_hrs);
          $stmt->bindParam(':ot', $ot);
    
        //Check whether the query was successful or not in updating data
        if($stmt->execute()) {
          echo "Success";
        }else{
            echo "Failed to save data to Attendance";
        }
      }else{
          echo "Failed to save data to BK_User table";
      }
    }
  }
});

//Delete All Attendee Attendance Record by ID
$app->delete('/delAttendee/{id}', function ($request, $response, $args){
    $id = $request->getAttribute('id');
    // $id = $delParams['id'];
    $sql = "DELETE FROM attendance_tbl WHERE userID=:id";
    try {
        $db = $this->db_local;
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        // $db = null;
     echo '{"error":{"text":"successfully! deleted All Attendance Records"}}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$app->post('/delAllAttendee/', function ($request, $response, $args) {
  // $dbLocal = $this->db_local;
  $dbLocal = $this->db_local;
  $delUserParams = $request->getParsedBody();
  foreach ($delUserParams['userDel'] as $value) {
    if($value != 1){
      // $stmt1 = $dbLocal->prepare("DELETE FROM BK_User WHERE userID = :userID");
      $stmt1 = $dbLocal->prepare("DELETE FROM attendance_tbl WHERE userID=:userID");
      $stmt1->bindParam(':userID', $value);
      if($stmt1->execute()){
        echo "Success" . "\n";
      }else{
        echo "Failed" . "\n";
      }
    }else{
      echo "Main administrator cannot be deleted." . "\n";
    }
  }
});

//Get Attendee By ID
$app->get('/getAllSchedule/', function ($request, $response, $args) {
  //access database $db_local to localDB
  $db = $this->db_local;
  //define parameter to get by ID
  // $id = $args['id'];
  //make the list array to request
  $schedListData = array();

  // prepare sql and bind parameters
  $stmt = $db->prepare("SELECT * FROM schedule_tbl");
  // $stmt->bindParam(':id', $id);
  $stmt->execute();
    //fetch the array response
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //loop array in forEach
    foreach ($res as $row){
      //array the list of response
      $schedListData[] = array(
        "userID"      => $row['userID'],
        "name"        => $row['name'],
        "department"  => $row['department'],
        "shift"       => $row['shift'],
        "dates"       => $row['dates'],
        "timed"       => $row['timed'],
        "weeks"       => $row['weeks']
      );
    }
    //display the output response
    echo json_encode($schedListData);
});

//Update Attendance by ID
$app->post('/updateSchedule/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $updateAttendanceParams = $request->getParsedBody();
  $userID = $updateAttendanceParams['userID'];
  $name = $updateAttendanceParams['name'];
  $department = $updateAttendanceParams['department'];
  $shift = $updateAttendanceParams['shift'];
  $dates = $updateAttendanceParams['dates'];
  $timed = $updateAttendanceParams['timed'];
  $weeks = $updateAttendanceParams['weeks'];
  $username = $updateAttendanceParams['username'];

  if($username == 'same_value'){
    //Check whether the query was successful or not in updating data
    $stmt = $dbLocal->prepare("UPDATE schedule_tbl SET name = :name, department = :department, shift =  :shift, dates =  :dates, timed =  :timed, weeks =  :weeks WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':department', $department);
      $stmt->bindParam(':shift', $shift);
      $stmt->bindParam(':dates', $dates);
      $stmt->bindParam(':timed', $timed);
      $stmt->bindParam(':weeks', $weeks);

    //Check whether the query was successful or not in updating data
    if($stmt->execute()) {
      echo "Success";
    }else{
      echo "Failed to save data to BK_User_Profile";
    }
  }else{
    //Check duplicate username
    $stmt = $dbLocal->prepare("SELECT * FROM BK_User WHERE Username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    if($stmt->rowCount() == -1) {
      echo "Username " . $username . " already exists.\n";
    }else{
    // save data to db
      $stmt = $dbLocal->prepare("UPDATE BK_User SET Username = :username WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':username', $username);
      
      //Check whether the query was successful or not in updating data
      if($stmt->execute()) {
         $stmt = $dbLocal->prepare("UPDATE schedule_tbl SET name = :name, department = :department, shift =  :shift, dates =  :dates, timed =  :timed, weeks =  :weeks WHERE userID = :userID");
          $stmt->bindParam(':userID', $userID);
          $stmt->bindParam(':name', $name);
          $stmt->bindParam(':department', $department);
          $stmt->bindParam(':shift', $shift);
          $stmt->bindParam(':dates', $dates);
          $stmt->bindParam(':timed', $timed);
          $stmt->bindParam(':weeks', $weeks);
    
        //Check whether the query was successful or not in updating data
        if($stmt->execute()) {
          echo "Success";
        }else{
            echo "Failed to save data to Schedule";
        }
      }else{
          echo "Failed to save data to BK_User table";
      }
    }
  }
});

//Delete All Attendee Attendance Record by ID
$app->delete('/delSchedule/{id}', function ($request, $response, $args){
    $id = $request->getAttribute('id');
    // $id = $delParams['id'];
    $sql = "DELETE FROM schedule_tbl WHERE userID=:id";
    try {
        $db = $this->db_local;
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        // $db = null;
     echo '{"error":{"text":"successfully! deleted Schedule Records"}}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$app->post('/delAllSchedule/', function ($request, $response, $args) {
  // $dbLocal = $this->db_local;
  $dbLocal = $this->db_local;
  $delSchedParams = $request->getParsedBody();
  foreach ($delSchedParams['userDel'] as $value) {
    if($value != 1){
      // $stmt1 = $dbLocal->prepare("DELETE FROM BK_User WHERE userID = :userID");
      $stmt1 = $dbLocal->prepare("DELETE FROM schedule_tbl WHERE userID=:userID");
      $stmt1->bindParam(':userID', $value);
      if($stmt1->execute()){
        echo "Success" . "\n";
      }else{
        echo "Failed" . "\n";
      }
    }else{
      echo "Main administrator cannot be deleted." . "\n";
    }
  }
});

//Get Attendee By ID
// $app->get('/getSalary/{id}', function ($request, $response, $args) {
//   //access database $db_local to localDB
//   $db = $this->db_local;
//   //define parameter to get by ID
//   $id = $args['id'];
//   //make the list array to request
//   $schedListData = array();

//   // prepare sql and bind parameters
//   $stmt = $db->prepare("SELECT * FROM salary_tbl WHERE userID=:id");
//   $stmt->bindParam(':id', $id);
//   $stmt->execute();
//     //fetch the array response
//     $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
//     //loop array in forEach
//     foreach ($res as $row){
//       //array the list of response
//       $schedListData[] = array(
//         "userID"      => $row['userID'],
//         "name"        => $row['name'],
//         "department"  => $row['department'],
//         "shift"       => $row['shift'],
//         "dated"       => $row['dated'],
//         "timed"       => $row['timed'],
//         "overtime"       => $row['overtime'],
//         "special_ot"    => $row['overtime_special'],
//         "lateness"    => $row['lateness'],
//         "early_leave"    => $row['early_leave'],
//         "tax"    => $row['tax_deduct'],
//         "deduction"    => $row['salary_deduct'],
//         "allowance"    => $row['allowance'],
//         "night_diff"    => $row['night_diff'],
//         "adjustment"    => $row['salary_adjustment'],
//         "paydate"    => $row['pay_date'],
//         "netpay"    => $row['net_pay'],
//         "grosspay"    => $row['gross_pay'],
//         "total"    => $row['total_deduct']
//       );
//     }
//     //display the output response
//     echo json_encode($schedListData);
// });

//Update Attendance by ID
$app->post('/updateSalary/', function ($request, $response, $args) {
  $dbLocal = $this->db_local;
  $updateAttendanceParams = $request->getParsedBody();
  $userID = $updateAttendanceParams['userID'];
  $name = $updateAttendanceParams['name'];
  $department = $updateAttendanceParams['department'];
  $shift = $updateAttendanceParams['shift'];
  $dated = $updateAttendanceParams['dated'];
  $timed = $updateAttendanceParams['timed'];
  $overtime = $updateAttendanceParams['overtime'];
  $special_ot = $updateAttendanceParams['special_ot'];
  $lateness = $updateAttendanceParams['lateness'];
  $early_leave = $updateAttendanceParams['early_leave'];
  $tax = $updateAttendanceParams['tax'];
  $deduction = $updateAttendanceParams['deduction'];
  $allowance = $updateAttendanceParams['allowance'];
  $night_diff = $updateAttendanceParams['night_diff'];
  $adjustment = $updateAttendanceParams['adjustment'];
  $paydate = $updateAttendanceParams['paydate'];
  $netpay = $updateAttendanceParams['netpay'];
  $grosspay = $updateAttendanceParams['grosspay'];
  $total = $updateAttendanceParams['total'];
  $username = $updateAttendanceParams['username'];

  if($username == 'same_value'){
    //Check whether the query was successful or not in updating data
    $stmt = $dbLocal->prepare("UPDATE salary_tbl SET name = :name, department = :department, shift =  :shift, dated =  :dated, timed =  :timed, overtime =  :overtime, overtime_special =  :special_ot, lateness =  :lateness, early_leave =  :early_leave, tax_deduct =  :tax, salary_deduct =  :deduction, allowance =  :allowance, night_diff =  :night_diff, salary_adjustment =  :adjustment, pay_date =  :paydate, net_pay =  :netpay, gross_pay =  :grosspay, total_deduct =  :total WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':department', $department);
      $stmt->bindParam(':shift', $shift);
      $stmt->bindParam(':dated', $dated);
      $stmt->bindParam(':timed', $timed);
      $stmt->bindParam(':overtime', $overtime);
      $stmt->bindParam(':special_ot', $special_ot);
      $stmt->bindParam(':lateness', $lateness);
      $stmt->bindParam(':early_leave', $early_leave);
      $stmt->bindParam(':tax', $tax);
      $stmt->bindParam(':deduction', $deduction);
      $stmt->bindParam(':allowance', $allowance);
      $stmt->bindParam(':night_diff', $night_diff);
      $stmt->bindParam(':adjustment', $adjustment);
      $stmt->bindParam(':paydate', $paydate);
      $stmt->bindParam(':netpay', $netpay);
      $stmt->bindParam(':grosspay', $grosspay);
      $stmt->bindParam(':total', $total);

    //Check whether the query was successful or not in updating data
    if($stmt->execute()) {
      echo "Success";
    }else{
      echo "Failed to save data to BK_User_Profile";
    }
  }else{
    //Check duplicate username
    $stmt = $dbLocal->prepare("SELECT * FROM BK_User WHERE Username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    if($stmt->rowCount() == -1) {
      echo "Username " . $username . " already exists.\n";
    }else{
    // save data to db
      $stmt = $dbLocal->prepare("UPDATE BK_User SET Username = :username WHERE userID = :userID");
      $stmt->bindParam(':userID', $userID);
      $stmt->bindParam(':username', $username);
      
      //Check whether the query was successful or not in updating data
      if($stmt->execute()) {
          $stmt = $dbLocal->prepare("UPDATE salary_tbl SET name = :name, department = :department, shift =  :shift, dated =  :dated, timed =  :timed, overtime =  :overtime, overtime_special =  :special_ot, lateness =  :lateness, early_leave =  :early_leave, tax_deduct =  :tax, salary_deduct =  :deduction, allowance =  :allowance, night_diff =  :night_diff, salary_adjustment =  :adjustment, pay_date =  :paydate, net_pay =  :netpay, gross_pay =  :grosspay, total_deduct =  :total WHERE userID = :userID");
          $stmt->bindParam(':userID', $userID);
          $stmt->bindParam(':name', $name);
          $stmt->bindParam(':department', $department);
          $stmt->bindParam(':shift', $shift);
          $stmt->bindParam(':dated', $dated);
          $stmt->bindParam(':timed', $timed);
          $stmt->bindParam(':overtime', $overtime);
          $stmt->bindParam(':special_ot', $special_ot);
          $stmt->bindParam(':lateness', $lateness);
          $stmt->bindParam(':early_leave', $early_leave);
          $stmt->bindParam(':tax', $tax);
          $stmt->bindParam(':deduction', $deduction);
          $stmt->bindParam(':allowance', $allowance);
          $stmt->bindParam(':night_diff', $night_diff);
          $stmt->bindParam(':adjustment', $adjustment);
          $stmt->bindParam(':paydate', $paydate);
          $stmt->bindParam(':netpay', $netpay);
          $stmt->bindParam(':grosspay', $grosspay);
          $stmt->bindParam(':total', $total);
    
        //Check whether the query was successful or not in updating data
        if($stmt->execute()) {
          echo "Success";
        }else{
            echo "Failed to save data to Salary";
        }
      }else{
          echo "Failed to save data to BK_User table";
      }
    }
  }
});

//Delete All Attendee Attendance Record by ID
$app->delete('/delSalary/{id}/', function ($request, $response, $args){
    $userID = $request->getAttribute('userID');
    // $id = $delParams['id'];
    $sql = "DELETE FROM schedule_tbl WHERE userID=:userID";
    try {
        $db = $this->db_local;
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':userID', $userID);
        $stmt->execute();
        // $db = null;
     echo '{"error":{"text":"successfully! deleted Schedule Records"}}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$app->post('/delAllSalary/', function ($request, $response, $args) {
  // $dbLocal = $this->db_local;
  $dbLocal = $this->db_local;
  $delSchedParams = $request->getParsedBody();
  foreach ($delSchedParams['userDel'] as $value) {
    if($value != 1){
      // $stmt1 = $dbLocal->prepare("DELETE FROM BK_User WHERE userID = :userID");
      $stmt1 = $dbLocal->prepare("DELETE FROM schedule_tbl WHERE userID=:userID");
      $stmt1->bindParam(':userID', $value);
      if($stmt1->execute()){
        echo "Success" . "\n";
      }else{
        echo "Failed" . "\n";
      }
    }else{
      echo "Main administrator cannot be deleted." . "\n";
    }
  }
});

$app->get('/getDepartmentAtendance/', function ($request, $response, $args) {
  $dblocal = $this->db_local;
  $profileParams = $request->getParsedBody();
  $userTypeData = array();

  // prepare sql and bind parameters
  $stmt = $dblocal->prepare("SELECT DISTINCT department FROM attendance_tbl");
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $userTypeData[] = array(
      "department"  => $row['department']
        );
  }
  echo json_encode($userTypeData);
});

$app->get('/getDepartmentSchedule/', function ($request, $response, $args) {
  $dblocal = $this->db_local;
  $profileParams = $request->getParsedBody();
  $userTypeData = array();

  // prepare sql and bind parameters
  $stmt = $dblocal->prepare("SELECT DISTINCT department FROM schedule_tbl");
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $userTypeData[] = array(
      "department"  => $row['department']
        );
  }
  echo json_encode($userTypeData);
});

$app->get('/getShift/', function ($request, $response, $args) {
  $dblocal = $this->db_local;
  $profileParams = $request->getParsedBody();
  $userTypeData = array();

  // prepare sql and bind parameters
  $stmt = $dblocal->prepare("SELECT DISTINCT shift FROM schedule_tbl");
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $userTypeData[] = array(
      "shift"  => $row['shift']
        );
  }
  echo json_encode($userTypeData);
});

$app->get('/getTime/', function ($request, $response, $args) {
  $dblocal = $this->db_local;
  $profileParams = $request->getParsedBody();
  $userTypeData = array();

  // prepare sql and bind parameters
  $stmt = $dblocal->prepare("SELECT DISTINCT timed FROM schedule_tbl");
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $userTypeData[] = array(
      "shift"  => $row['shift']
        );
  }
  echo json_encode($userTypeData);
});

$app->get('/getWeeks/', function ($request, $response, $args) {
  $dblocal = $this->db_local;
  $profileParams = $request->getParsedBody();
  $userTypeData = array();

  // prepare sql and bind parameters
  $stmt = $dblocal->prepare("SELECT DISTINCT weeks FROM schedule_tbl");
  $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach ($res as $row){
    $userTypeData[] = array(
      "shift"  => $row['shift']
        );
  }
  echo json_encode($userTypeData);
});