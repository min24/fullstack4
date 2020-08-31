<?php
namespace company\duy;

class dongVat {
	private $canNang = 0;
	public static $chieuCao = 1;

	public function __construct(){
		echo 'Xin chao, toi la mot dong vat';
	}

	public function showCanNang(){
		echo $this->canNang;
	}
}

class conMeo extends dongVat {

	public function __construct($name = 'con meo'){
		parent::__construct();
		echo 'Xin chao, toi la '.$name;
	}

	public function __destruct(){
		echo 'Con meo dang dc huy';
	}

	public static function abc(){
		echo 'call from abc function'
	}

}

$tom = new company\duy\conMeo('Tom');
$tom->showCanNang();

echo conMeo::$chieuCao;
?>