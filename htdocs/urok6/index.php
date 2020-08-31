<?php

abstract class conVat1 {

	abstract public function chay();
}



interface bietBay {
	public function voCanh();
}

trait bay {
	public function voCanh(){
		echo 'vo canh';
	}
}

interface bietBoi {
	public function vayDuoi();
}

trait boi {
	public function vayDuoi(){
		echo 'Vay duoi';
	}
}

class conVat extends conVat1 {
	public $canNang = 1;
	public function chay(){
		echo 'Dang chay';
	}
}



class conCa extends conVat implements bietBoi {
	use boi;
}

class conRong extends conVat implements bietBay, bietBoi {
	use boi;
	use bay;
}

$conRong1 = new conRong();

$conRong1->vayDuoi();
$conRong1->voCanh();

?>