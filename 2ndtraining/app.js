// https://engineertodeveloper.com/create-a-responsive-navbar-using-vanilla-javascript/
// Lastly, we need to define the JavaScript that will
//  control the behavior of the navbar. I will use the new ES6 class 
// syntax to create a Navbar component that we can reuse. 
class Navbar{
    constructor(target,menu){
        if(target instanceof HTMLElement && menu instanceof HTMLElement){
            this.btn = target;
            this.menu = menu;
                //adding event lestiner
            this.btn.addEventListener('click',()=>{this.open();})
        }else{
             console.log(this.btn,this.menu);
            throw new TypeError('not an html elemnt')
           
        }
      this.isOpen = false;  
    }
    // /////////////
    open(){
        if(this.isOpen){
            this.menu.classList.add('nav-hidden');
        }else {
            this.menu.classList.remove('nav-hidden');
        }
    this.isOpen = !this.isOpen;
    }
    // //////////////
}

const navbar = new Navbar(
    document.querySelector('.menu-btn'),
    document.querySelector('.menu-list')
)
const dropdwonmenu = new Navbar(
    document.querySelector('.toggle-link'),
    document.querySelector('.dropown-list')

)