var img1Url = "https://wallpaperaccess.com/full/138728.jpg";
var img2Url = "https://wallpaperaccess.com/full/138728.jpg";
var img3Url = "https://wallpaperaccess.com/full/138728.jpg";

var images = [img1Url, img2Url, img3Url];

function loadImage(img1Url) {
    return new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function(){
            resolve();
        }
        img.onerror = function(){
            reject();
        }
        img.src = img1Url;
    });
}

loadImage(img1Url) // load dc 1 image
.then(function() {
    console.log('load 1 image success');
    return loadImage(img1Url);
})
.then(function() {
    console.log('load 2 image success');
    return loadImage(img2Url);
})
.then(function() {
    console.log('load 3 image success');
    return loadImage(img3Url);
})
.then(function() {
    console.log('load all image success');
})
.catch( function() {
    console.log('load image error');
});



function loadAnh() {
    return new Promise... 
}

function guiAjax() {
    return new Promise... 
}

function loadProfile() {
    return new Promise... 
}

// Nhan vao 1 mang cac ham
Promise.all([
    loadImage(images[0]),
    loadImage(images[1]),
    loadImage(images[2]),
])
.then( function(){
    console.log('load tat ca anh thanh cong');
})
.catch( function(){
    console.log('load anh that bai');
})
//===================================
var allImageLoadPromises = [];

for (var i = 0; i < images.length; i++) {
    var imgPromise = loadImage(images[i]);
    allImageLoadPromises.push(imgPromise);
}

console.log(allImageLoadPromises);



//===================================
 function loadAllImages() {
     var allImageLoadPromises = [];

     for (var i = 0; i < images.length; i++) {
         var imgPromise = loadImage(images[1]);
         allImageLoadPromises.push(imgPromise);
     }

     return Promise.all(allImageLoadPromises);

 }

 loadAllImages()
 .then( function(){
     console.log('load tat ca anh thanh cong');
 })
 .catch( function() {
     console.log('load anh that bai');
 })


 // async await

async function loadAllImages() {
    await loadImage(images[0]); // then
    await loadImage(images[1]); // then
    await loadImage(images[2]); // then
}

loadAllImages()
.then( function() {
    console.log("load all image success");
})
.catch( function() {
// bao loi khi 1 trong cac await loi
console.log("load anh bi loi");
});

