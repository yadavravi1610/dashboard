var header = document.getElementById('header');
var menu = document.getElementById('menu');
var close = document.getElementById('close');
var navLinks = document.querySelectorAll('.nav-link');

function highlightCurrentPage() {
    var currentPath = window.location.pathname;
    navLinks.forEach(link => {
        var linkPath = link.querySelector('a').getAttribute('href');
        if (linkPath.endsWith(currentPath)) {
            console.log("Hello");
            link.classList.add('highlight');
        } else {
            link.classList.remove('highlight');
        }
    });
}


highlightCurrentPage();

menu.addEventListener('click', ()=>{
    header.style.display = "block";
    menu.style.display = "none";
})

