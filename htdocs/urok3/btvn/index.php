<?php

session_start();

if ( isset($_POST['submitDangnhap']) ){

	if ( $_POST['username'] == 'duy' && $_POST['password'] == '456'){
		$_SESSION['username'] = $_POST['username'];
		
		header('location: admin.php');
	}
	else {
		echo "Dang nhap that bai\n 
		Hint: username = duy, pass = 456";
	}
}


?>

<form method="post" action="index.php">
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