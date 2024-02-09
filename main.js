function myMenuFunction(){
    var menuBtn = document.getElementById('myNavMenu');
    if (menuBtn.className === 'nav-menu'){
        menuBtn.className+= 'responsive';
    }else{
        menuBtn.className = "nav-menu";
    }
}
const body = document.querySelector("body"),
toggleswitch = document.getElementById("toggle-switch");
toggleswitch.addEventListener("click" , ()=>{
    body.classList.toggle('dark')
})

// var typingEffect = new typed(".typedText", {
//     Strings: ["Designer", "Coder", "Developer"],
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 80,
//     backDelay: 2000,
// })
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})
const sr = ScrollReveal({
    orgigin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});
sr.reveal(".featured-name", {delay:100});
sr.reveal(".text-info", {delay:200});
sr.reveal(".text-btn", {delay:200});
sr.reveal(".social_icons", {delay:200});
sr.reveal(".social_icons", {delay:320});


sr.reveal(".project-box", {interval:100});
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    orgigin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", {delay:100});
srLeft.reveal(".contact-info", {delay:100});

const srRight = ScrollReveal({
    orgigin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});
srRight.reveal(".skill", {delay:100});
srRight.reveal(".sikll-box", {delay:100});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section[id]");

    function scrollActive() {
        const scrolly = window.scrollY;
        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");
            const navLink = document.querySelector(".nav-menu a[href='#" + sectionId + "']");
            
            if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
                navLink.classList.add("active-link");
            } else {
                navLink.classList.remove("active-link");
            }
        });
    }

    window.addEventListener("scroll", scrollActive);
});
