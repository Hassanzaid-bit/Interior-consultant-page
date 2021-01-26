const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");
const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");



function openMobileNavbar(){
    navbar.classList.add("opened");
    navbarToggle.setAttribute("aria-label", "Close navigation menu")
}

function closeMobileNavbar(){
    navbar.classList.remove("opened");
    navbarToggle.setAttribute("aria-label", "Open navigation menu")
}

navbarToggle.addEventListener("click", () => {
    if(navbar.classList.contains("opened")){
        closeMobileNavbar()
    }else{
        openMobileNavbar()
    }
});

navbarLinksContainer.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
});

function removeOpenedClass(x){
    if(x.matches){
        closeMobileNavbar()
    }
};

var mediaQueryList = window.matchMedia(("max-width: 700px"));

function screenTest(e) {
    if (e.matches) {
        console.log("We are good")
    }else {
        console.log("Greater than 700px")
    }
}

mediaQueryList.addEventListener("change", screenTest)