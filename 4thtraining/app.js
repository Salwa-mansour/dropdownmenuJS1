class ShowHidden{
    constructor(btn,elemnt){
        if(btn instanceof HTMLElement && elemnt instanceof HTMLElement){
            this.btn =btn;
            this.elemnt=elemnt;

            this.btn.addEventListener('click',()=>{
                this.open();
            });
        }else{
            throw new TypeError('not an html elemnt');
        }
        this.isOpen = false;
    }
    // ////////////////
    open(){
        if(this.isOpen){
            this.elemnt.classList.add('nav-hidden');
        }else{
            this.elemnt.classList.remove('nav-hidden');
        }
        this.isOpen = !this.isOpen;
    }
}

//make opjects 
const navbar = new ShowHidden(
    document.querySelector('.menu-btn'),
    document.querySelector('.menu-list')
)
const dropDown = new ShowHidden(
    document.querySelector('.dropdown-btn'),
    document.querySelector('.dropdown-list')
)
// collapsing all sub menus when the humberger icon is clicked to hid the main menu
navbar.btn.addEventListener('click',function(){
    dropDown.elemnt.classList.add('nav-hidden')
})