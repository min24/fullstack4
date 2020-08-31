<?php 


abstract class phuongTien {
	public $trongTai = 0;
	abstract public function xepHangLen();
	abstract public function xepHangXuong();
}

trait thoiGianVC {
	public function thoiGianVC($quangDuong){
		return $quangDuong/$this->vanTocTB;
	}
}



class duongBo extends phuongTien {

	public $vanTocTB = 50;
	public $trongTai = 100;

	public function __construct($name){
		echo 'Ban dang su dung dich vu van tai bang phuong tien duong bo: '.$name;
	}

	public function xepHangLen(){
		echo 'Da xep hang len';
	}
	public function xepHangXuong(){
		echo 'Da xep hang xuong';
	}

	public function traPhiBOT(){
		echo 'Da tra phi BOT';
	}

	use thoiGianVC;
}

class duongThuy extends phuongTien {

	public function __construct($name){
		echo 'Ban dang su dung dich vu van tai bang phuong tien duong thuy: '.$name;
	}
	public function xepHangLen(){
		echo 'Da xep hang len';
	}
	public function xepHangXuong(){
		echo 'Da xep hang xuong';
	}

	public function chongTham() {
		echo 'Chong tham nuoc';
	}
	use thoiGianVC;
}

class hangKhong extends phuongTien {
	public function __construct($name){
		echo 'Ban dang su dung dich vu van tai bang phuong tien hang khong: '.$name;
	}

	public function xepHangLen(){
		echo 'Da xep hang len';
	}
	public function xepHangXuong(){
		echo 'Da xep hang xuong';
	}
	use thoiGianVC;


}

$quangDuong = 500;



$xeMay = new duongBo('Xe may');
$xeMay->trongTai = 50;
$xeMay->vanTocTB = 40;



echo "<br>";
echo "Thoi gian van chuyen: ".$xeMay->thoiGianVC($quangDuong).' h.';

?>