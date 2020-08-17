
class selecbox {

    constructor(selector){
        this.selector = selector;
        this.element = document.getElementById(this.selector);
        this.defaultElement = document.querySelector('#'+this.selector+'>span');
        this.defaultElement.addEventListener('click', () => {
            if (this.element.classList.contains('opened')){
                this.element.classList.remove('opened');
            }
            else {
                this.element.classList.add('opened');
            }
        });

        document.addEventListener('click', (event) => {
            if (event.target != this.defaultElement) {
                this.element.classList.remove('opened');
            }
        });
    }
}

var selectCity = new selecbox('city');
var selectAnimal = new selecbox('animal');


/*===============*/
var img1Url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"

function loadImage(url, successCallback, errorCallback) {
    var img = new Image();
    img.onload = function(){
        successCallback();
    }
    img.onerror = function(){
        errorCallback();
    }
    img.src = url;
}

loadImage(
    img1Url, 
    function(){
    console.log("Load xong");
}, function(){
    console.log('Anh load bi loi');
});

console.log(1);

setTimeout(() => console.log('Xong'));

