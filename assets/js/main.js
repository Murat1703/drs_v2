let mainHeader= document.querySelector('.main-header');
window.addEventListener('scroll', function() {
    if (pageYOffset > 40){
        mainHeader.classList.add('fixed-header');
    }else if (pageYOffset < 40){
        if (mainHeader.classList.contains('fixed-header')){
            mainHeader.classList.remove('fixed-header');
        }
    }
  });
AOS.init({
    duration: 750,
    easing: 'ease-in-quad', 
    disable: function () {
        var maxWidth = 500;
        return window.innerWidth < maxWidth;
      }    
});
 
VanillaTilt.init(document.querySelector(".main-img"), {
    max: 5,
    speed: 900,
    transition: true
});

let menuBurger = document.querySelector('.menu-burger');
mobileMenu = document.querySelector('.mobile-menu');
menuBurger.addEventListener('click', ()=> {
    menuBurger.classList.toggle('show-burger');
    mobileMenu.classList.toggle('__active-mobile');
})

var map;

DG.then(function () {
    map = DG.map('map', {
        center: [43.26184865289599, 76.92936123071158],
        zoom: 16
    });

    DG.marker([43.26184865289599, 76.92936123071158])
    .addTo(map)
    .bindLabel('DRS',{
        static: true
    });
    
});
var modal = document.getElementById("modal");
var btn = document.getElementById("modal-btn");
var close = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
