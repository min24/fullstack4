<?php 

session_start();

if ( ! isset($_SESSION['username']) ){
	header('location: index.php');
}


?>

<h2>Chao mung ban den voi trang admin</h2>

<p>Xin chao ban, <?php echo $_SESSION['username'] ?></p>

<p><a href="logout.php">Thoat tai khoan</a></p>