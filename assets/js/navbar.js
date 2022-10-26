class MobileNavBar {
    constructor (mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link,index) => {
            link.style.animation
            ? (link.style.animation = ""): (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        })
    }

    handleClick() {
         document.querySelector(".nav-list").style.display
        if( document.querySelector(".nav-list").style.display === "none") {
            document.querySelector(".nav-list").style.display = "block";
        } else if ( document.querySelector(".nav-list").style.display === "block"){
            document.querySelector(".nav-list").style.display = "none"
        }
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick)
    }
    
    init() {
        document.querySelector(".nav-list").style.display = "none";
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
MobileNavbar.init()