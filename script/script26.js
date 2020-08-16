class conMeo {

    constructor(mau, canNang) {
        this.mau = mau;
        this.canNang = canNang;
    }

    an() {
        console.log('an');
    }

    di() {

    }
}

var Tom = new conMeo('den', 1);
console.log(Tom.canNang);

// Doi tuong chi dung 1 lan
var Miu = {
    mau : 'den',
    canNang : 1,
};
console.log(Miu.mau);

// cach 3
function phone(mau) {
    this.mau = mau;

    this.makeCall = function() {
        console.log('making call');
    }
}



class conVat {

    constructor(name) {
        this.name = name;
    }


    di(){
        console.log("di");
    }
}

class conCho extends conVat {
    constructor(name) {
        super(name);
    }
}

var dog = new conCho("Ki");

dog.di();

console.log(dog.name)