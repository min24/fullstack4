function chiaHetChoBa (num) {
	return num % 3 == 0;
}

console.log( chiaHetChoBa(3) );

var students = ["ng", "lo", "Du"];
console.log( students[students.length - 1]);
var lastStudent = students.pop();
console.log( students.pop);

students.push('hon');

console.log( students.join('-'));

students.forEach( function(student) {
	// statements
	console.log('xin chao toi ten la ' + student);
	console.log('toi da an com roi')
});


var studentTeenNames = students.map( function(student){
	return student + "'s";
})

console.log(studentTeenNames);


var numbers = [3, 5, 8, 4, 1];
// muon co mot mang nhieu hon 1 don vi [4.6.9]
var numberAddOnes = numbers.map(function(num){
	return num + 1;
})
console.log(numberAddOnes);


// Nhat ra cac so chan

var evenNumbers = numbers.filter( num => (num%2 == 0) );
console.log(evenNumbers);


console.log( numbers.every( num => (num%2 == 0) ) );


// Bai toan cong don, tinh tong cac so
var total = numbers.reduce( (total, soHienTai) => {
	return total + soHienTai;
}, 0);

console.log(total);

var soChan = numbers.reduce( (soLuongSoChan, soHienTai) => {
	if (soHienTai % 2 == 0) {
		soLuongSoChan = soLuongSoChan + 1;
	}
	return soLuongSoChan;
}, 0)
console.log(soChan);

