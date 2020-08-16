var ho = 'Ng';
var ten = 'Duy';

var hoTen = ho + ' ' + ten;

console.log(hoTen)

var tenVietHoa = ten.toUpperCase();
console.log(tenVietHoa);
console.log(ho.length);

var name = 'Nguyen Long Duy';
var cat = name.substring(1, 6);
console.log(cat);

// Cat 4 ki tu cuoi cug
console.log(name.substring(name.length - 4, name.length));
console.log(name.replace(name.substring(name.length - 3, name.length), 'Hung'));


console.log(name.indexOf('n'));

console.log(name.charAt(2));

console.log(name.split(' '));



function chaoHoi () {
	console.log('Xin chao');
	console.log("toi ten la Duy");
};

var chaoHoi = function(name, age) {
	console.log('Xin chao');
	console.log("toi ten la " + name);
	console.log("toi " + age + " tuoi");

};
chaoHoi('Duy', 23);


function cong(a, b) {
	var cong = a + b;
	return tong;
} 

console.log(cong(2,3));


var chaoHoi = name => {
	console.log('xin chao, toi la ' + name);
}


var chaoHoi = (name, chaoXong) => {
	console.log('Xin chao, toi la ' + name);
	chaoXong();
}

var batTay = () => {
	console.log('bat tay');
}

var anCom = () => {
	console.log('an com');
}

chaoHoi('Nguyen', batTay);
chaoHoi('Tung', anCom);