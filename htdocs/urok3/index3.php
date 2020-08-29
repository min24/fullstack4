<?php


session_start();

if ( isset($name) ) {
	echo 'Bien name da ton tai';
}
else {
	echo 'Bien name chua ton tai';
}

if ( isset($_POST['submitDangnhap']) ){

	if ( $_POST['username'] == 'nguyen' && $_POST['password'] == '123'){
		$_SESSION['username'] = $_POST['username'];
		
		header('location: taikhoan.php');
	}
	else {
		echo 'Dang nhap that bai';
	}
}


?>

<form method="post" action="index3.php">
	<div>
		Username: <input type="text" name="username" placeholder="Username">
	</div>
	<div>
		Password: <input type="password" name="password" placeholder="Password">
	</div>
	<div>
		<button type="submit" name="submitDangnhap" value="abc">
		Dang nhap
	</button>
	</div>
</form>