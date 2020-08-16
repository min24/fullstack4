


// Xuat cac so tu 0 - 1-, nhung tru so 5
for (var i = 0; i <= 10; i++) {
    if (i == 5) {
        continue; // bo qua tat ca cac cau lenh phia duoi, tiep tuc vong lap
    }
    console.log(i);
}

var i = 0;
// ktra r moi chay
while(i <= 10) {
    console.log(i);
    i++;
}
//chay trc r moi ktra

do {
    console.log(i);
    i++;
}
while (i <= 10);

var classTitle = document.getElementById("name");
console.log(classTitle);

var classTitles = document.getElementsByClassName("name");
console.log(classTitles);

for (var i = 0; i < classTitles.length; i++) {
    console.log( classTitles[i]);
}

var classHeading = document.createElement("h1");
classHeading.innerHTML = "Lop hoc Fullstack";
document.body.appendChild(classHeading);

var classTitle2 = document.querySelector('.name#fs4');
var classTitle2 = document.querySelectorAll('.name');


var fs4 = document.querySelector('#fs4');
fs4.innerHTML = "Toi la ai?";
fs4.style.color = "red";


var nutDangKy = document.getElementById('nutDangKy');
var nutXacNhan = document.getElementById('nutXacNhan');

nutDangKy.addEventListener('click', function(){
    nutXacNhan.addEventListener('click', function(){
        console.log('Da Xac Nhan');
    });
});

var divThongBao = document.getElementById("thongBao");
nutDangKy.addEventListener('click', () => {
    var msg = document.createElement('div');
    msg.id = 'msg';
    msg.style.color = "red";
    msg.innerHTML = "Dan da dang ki";
    divThongBao.appendChild(msg);

})

var loading = document.getElementById('loading');
var pageContent = document.getElementById('page-content');
window.addEventListener('load', () => {
    loading.style.display = 'none';
    pageContent.style.display = 'block';
});

var showMessage = function(){
    console.log('abc');
}