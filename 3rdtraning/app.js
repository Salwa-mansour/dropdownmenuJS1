class Showhidden{
    constructor(key,target){
        if(target instanceof HTMLElement && key instanceof HTMLElement){
            this.key=key;
            this.target=target;

            this.key.addEventListener('click',()=>{
                this.open();
            });
        }else{
            throw new TypeError('not an hteml elemnts')
        }
        this.isOpen = false;
    }
    // /////////////////
    open(){
        if(this.isOpen){
            this.target.classList.add('nav-hidden');
        }else {
            this.target.classList.remove('nav-hidden');
        }
        this.isOpen = !this.isOpen;
    }

}
const navbar = new Showhidden(
    document.querySelector('.menu-btn'),
    document.querySelector('.menu-list')
)
const dropdwonmenu = new Showhidden(
    document.querySelector('.drop-btn'),
    document.querySelector('.drop-list')
)