var img1Url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"

// load 5 hinh anh theo thu tu 1,2,3,4,5

function loadImage(img1Url) {

    return new Promise( function(resolve, reject){
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

loadImage(img1Url).then(function() {
    console.log("Load image thanh cong");
})
.catch( function() {
    console.log("Load image error");
})