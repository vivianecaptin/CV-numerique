//animation ghost NAVBAR
var imgGhostNav2 = document.querySelector('.ghostNav2')
var imgGhostNav1 = document.querySelector('.ghostNav1')

imgGhostNav2.addEventListener('mouseover', function() {
    imgGhostNav1.style.display = 'block';
    imgGhostNav2.style.display = 'none';
})

imgGhostNav1.addEventListener('mouseout', function() {
    imgGhostNav1.style.display = 'none';
    imgGhostNav2.style.display = 'block';
})

//navbar color
var meElement = document.querySelector('#me');
var skillsElement = document.querySelector('#skills');
var expElement = document.querySelector('#experience');
var educElement = document.querySelector('#education');
var aboutElement = document.querySelector('#about');

var navbarElement = document.querySelector('#navbar');

window.addEventListener('scroll', function() {
    var mePosition = meElement.offsetTop + meElement.offsetHeight;
    var skillsPosition = meElement.offsetTop + meElement.offsetHeight - navbarElement.offsetHeight;
    var expPosition = skillsElement.offsetTop + skillsElement.offsetHeight - navbarElement.offsetHeight;
    var educPosition = expElement.offsetTop + expElement.offsetHeight - navbarElement.offsetHeight;
    var aboutPosition = educElement.offsetTop + educElement.offsetHeight - navbarElement.offsetHeight;;
    
    if (window.scrollY < mePosition) {
        navbarElement.style.backgroundColor = '#A6CDCF';
        imgGhostNav2.src = 'assets/img/ghost_green2.png'
        imgGhostNav1.src = 'assets/img/ghost_green.png'
    }
    if (window.scrollY > skillsPosition) {
        navbarElement.style.backgroundColor = '#FFD4D0';
        imgGhostNav2.src = 'assets/img/ghost_red2.png'
        imgGhostNav1.src = 'assets/img/ghost_red.png'
    }
    if (window.scrollY > expPosition) {
        navbarElement.style.backgroundColor = '#E4F0F1';
        imgGhostNav2.src = 'assets/img/ghost_blue2.png'
        imgGhostNav1.src = 'assets/img/ghost_blue.png'
    }
    if (window.scrollY > educPosition) {
        navbarElement.style.backgroundColor = '#5E87BB';
        imgGhostNav2.src = 'assets/img/ghost_light_green2.png'
        imgGhostNav1.src = 'assets/img/ghost_light_green.png'
    }
    if (window.scrollY > aboutPosition) {
        navbarElement.style.backgroundColor = '#E4F0F1';
        imgGhostNav2.src = 'assets/img/ghost_green2.png'
        imgGhostNav1.src = 'assets/img/ghost_green.png'
    }
})
