var img1Url = "https://wallpaperaccess.com/full/138728.jpg";
var img2Url = "https://wallpaperaccess.com/full/138728.jpg";
var img3Url = "https://wallpaperaccess.com/full/138728.jpg";

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
    return loadImage(img1Url);
})
.then(function() {
    return loadImage(img2Url);
})
.then(function() {
    return loadImage(img3Url);
})
.then(function() {
    console.log('load all image success');
})
.catch( function() {
    console.log('load image error');
});