<?php

const ENV = 'development';

if (ENV == 'production'){
	ini_set('error_reporting', 0);
	ini_set('display_errors', false);

}

function showLoi($errno, $errstr, $errfile, $errline){

}

echo $name;
phpinfo();




try {
	// Bat ki cau lenh nao o day bi loi => nhay sang catch

	// ket noi co so du lieu
		// ngta da viet san cac ngoai le => loi => nem ra cac ngoai le
	throw new Exception('weffg');
}
catch (Exception $ex){
	print_r($ex);
}
finally{
	// khi ko co loi gi, ko chay qua catch
}




?>