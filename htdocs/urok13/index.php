<?php

class session {

	public function __construct(){
		session_start();
	}

	public function set($name, $value){
		$_SESSION[$name] = $value;
	}

	public function has($name){
		return isset( $_SESSION[$name] );
	}

	public function remove($name){
		unset($_SESSION[$name]);
	}
	
}


?>