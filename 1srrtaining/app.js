// https://engineertodeveloper.com/create-a-responsive-navbar-using-vanilla-javascript/
// Lastly, we need to define the JavaScript that will
//  control the behavior of the navbar. I will use the new ES6 class 
// syntax to create a Navbar component that we can reuse. 
class Navbar{
    constructor(target,menu){
        //1.check the partehmeters type and throw error if not an HTMl element
        if(target instanceof HTMLElement && menu instanceof HTMLElement) { 
      //2.if parameters are html element set the attribute
            this.btn = target;
            this.menu = menu;

            this.btn.addEventListener('click',()=>{
                this.open();
            })
        } else{
            throw new TypeError('The Target and Menu argument must be a DOM elemnt.');
        }
   this.isOpen = false;
    }
    //////////////
  open(){
       if(this.isOpen){
           this.menu.classList.add('nav-hidden')
       } else{
           this.menu.classList.remove('nav-hidden')
       }

    this.isOpen = !this.isOpen;
   }
}

// test
const navbar = new Navbar(
    document.querySelector('.menu-btn'),
    document.querySelector('.menu-list')
)
//------------ drop down script-----------------
class Dropdown{
    constructor(elem){
        if(!(elem instanceof HTMLElement)){
            throw new TypeError('not an html elemnt');
        }
        this.isOpen = false;
        this.elem = elem;
        this.elem.addEventListener('click',(e)=>{
            e.preventDefault();
            this.open();
        });
    }
    // /////
    open(){
        if(!this.isOpen){
            this.elem.querySelector('.dropdown-list').classList.add('show-dropdown');
        }else{
            this.elem.querySelector('.dropdown-list').classList.remove('show-dropdown');
        }
    this.isOpen= !this.isOpen;
    }
}
const dropdownElem = document.querySelector('.dropdown');
const navDropdown = new Dropdown(dropdownElem);