<?php
//constructor

$dbConnection = new mysqli('localhost', 'root', '', 'qlsv');

if ($dbConnection->connect_errno > 0){
	die('Loi ket noi den co so du lieu');
}

//========================================

/*

$data = $dbConnection->query("SELECT * FROM users");
print_r($data);

if ($data->num_rows == 0){
	echo 'Khong co du lieu';
}

while ( $row = $data->fetch_array() ){
	echo $row['fullname'];
}

$username = 'nguyenbv';
$password = '123';

$data1 = $dbConnection->query("SELECT * FROM users WHERE username = '$username' AND password = '$password' ");
*/


//============================================

/*$statement = $dbConnection->prepare("SELECT * FROM users WHERE username = ? AND password = ? ");
$statement->bind_param('ss', $username, $password);

$statement->execute(); // thuc thi cau lenh

$data2 = $statement->get_result();
while ( $row = $data2->fetch_object() ) {
	# code...
	echo "\n".$row->fullname;
}*/

//===============================================
/*
$newPassword = 'duy';
$id = 2;
$statement = $dbConnection->prepare("UPDATE users SET password = ? WHERE id = ?");
$statement->bind_param('si', $newPassword, $id);

$result = $statement->execute(); // tra ve boolean

if ($result) {
	echo 'Doi pass thanh cong';
}
else {
	echo 'Doi pass khong thanh cong';
}
*/
//======================================

/*$username = 'duynl';
$password = '123';
$fullname = "Nguyen Duy";

$useInfo = [
	'username' => 'duynl',
	'password' => '123',
	'fullname' => 'Nguyen Duy',
];

$statement = $dbConnection->prepare("INSERT INTO users(username, password, fullname) VALUES(?, ?, ?)");

$statement->bind_param('sss', ...$userInfo); // trai het cac bien ra, sd khi ko biet phia sau co bao nhieu cai

$result = $statement->execute(); // tra ve boolean

if ($result) {
	echo 'Them user thanh cong';
}
else {
	echo 'Them user khong thanh cong';
}*/


//=============================================
// Delete



/*$userId = 3;
$statement = $dbConnection->prepare("DELETE users WHERE id = ?");

$statement->bind_param('i', $userId); // trai het cac bien ra, sd khi ko biet phia sau co bao nhieu cai

$result = $statement->execute(); // tra ve boolean

if ($result) {
	echo 'Xoa user thanh cong';
}
else {
	echo 'Xoa user khong thanh cong';
}*/

require "database.php";

$db = new database([
	'host' => 'localhost',
	'user' => 'root',
	'password' => '',
	'databaseName' => 'qlsv',
]);

//$deleteResult = $db->table('users')->delete(1);

$users = $db->table('users')->getAll();

foreach ($users as $user) {
	# code...
	echo $user->fullname;
	echo '<br>';
}

?>



