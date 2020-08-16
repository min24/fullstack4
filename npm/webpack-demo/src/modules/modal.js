console.log("modal");

class modal {
    constructor() {
        console.log("modal");
    }
}

var person = function() {
    console.log("Person");
}

export {
    modal, // dat 1 property ten la modal va gia tri la modal 
    person
};

export default {
    modal,
};

module.exports = {
    modal
};

