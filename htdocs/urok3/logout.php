<?php

session_start();

unset( $_SESSION['username']);
header('location: index3.php');

?>