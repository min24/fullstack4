class tab {
    constructor(selector) {
        this.selector = selector;
        this.element = document.getElementById(this.selector);
        this.tenTab = document.querySelector('#'+this.selector+'>span');
        this.noiDung = document.querySelector('#'+this.selector+'>div');
      
        this.tenTab.addEventListener('click', () => {
            if (this.element.classList.contains('opened')){
            console.log("Opened");
        }
        else{
            this.element.classList.add('opened');
        }
      })
      
        document.addEventListener('click', (event) => {
            if (event.target != this.tenTab) {
                this.element.classList.remove('opened');
            }
        });
    }
  }

class tabBox {
    constructor(selector) {
        this.selector = selector;
        this.element = document.getElementById(this.selector);
        var a = document.querySelectorAll('#'+this.selector+'>div');
        a.forEach(ele => {
            new tab(ele.id);
        })
    }

    deleteTab(id) {
        document.getElementById(id).remove();
    }

    addTab(id, ten="New tab", nd="New content") {
            var newTab = document.createElement("div");                 // Create a <p> element
            newTab.id = id;
            newTab.classList = "tabs";
            document.getElementById(this.selector).appendChild(newTab);

            var newTen = document.createElement("span");
            newTen.innerHTML = ten;
            var newNd = document.createElement("div");
            newNd.innerHTML = nd;
            document.querySelector('#'+this.selector+'>div:last-child').appendChild(newTen);
            document.querySelector('#'+this.selector+'>div:last-child').appendChild(newNd);
            new tab(id);
        
    }
}

var mauTab1 = new tabBox('mauTab1');
mauTab1.deleteTab("tab3");
mauTab1.addTab("tab4", "Tab 4", "Noi dung 4");

var mauTab2 = new tabBox('mauTab2');
mauTab2.addTab(id="t1", ten="Tab 1", nd="Noi dung 1");
mauTab2.addTab(id="t2", ten="Tab 2", nd="Noi dung 2");

// modal

// Get the modal

class Modal {
    constructor(selector) {
        this.selector = selector;
        this.element = document.getElementById(this.selector);
        this.x = document.querySelector('#'+this.selector+'>div>div');

        document.addEventListener('click', (event) => {
            if (event.target == this.x) {
                this.element.classList.add('close');
            }
        });
    }
}

var modal1 = new Modal("modal1");