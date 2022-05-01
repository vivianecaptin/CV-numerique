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

// animation fantome présentation
var meLineGhostAnimElement = document.querySelector ('#meLineGhostAnim');
meLineGhostAnimElement.style.webkitAnimationPlayState = "paused";

meLineGhostAnimElement.addEventListener('click', function() {
    meLineGhostAnimElement.style.webkitAnimationPlayState = "running";
})

meLineGhostAnimElement.addEventListener('mouseover', function() {
    meLineGhostAnimElement.src = 'assets/img/ghost_blue2.png'
    if (meLineGhostAnimElement.style.webkitAnimationPlayState = "running") {
        meLineGhostAnimElement.style.webkitAnimationPlayState = "paused"
    }
})
meLineGhostAnimElement.addEventListener('mouseout', function() {
    meLineGhostAnimElement.src = 'assets/img/ghost_blue.png'
    if (meLineGhostAnimElement.style.webkitAnimationPlayState = "paused") {
        meLineGhostAnimElement.style.webkitAnimationPlayState = "running"
    }
})

// animation fantome compétences
var skillsLineGhostAnimElement = document.querySelector ('#skillsLineGhostAnim');
skillsLineGhostAnimElement.style.webkitAnimationPlayState = "paused";

skillsLineGhostAnimElement.addEventListener('click', function() {
    skillsLineGhostAnimElement.style.webkitAnimationPlayState = "running";
})

skillsLineGhostAnimElement.addEventListener('mouseover', function() {
    skillsLineGhostAnimElement.src = 'assets/img/ghost_pink.png'
    if (skillsLineGhostAnimElement.style.webkitAnimationPlayState = "running") {
        skillsLineGhostAnimElement.style.webkitAnimationPlayState = "paused"
    }
})
skillsLineGhostAnimElement.addEventListener('mouseout', function() {
    skillsLineGhostAnimElement.src = 'assets/img/ghost_pink2.png'
    if (skillsLineGhostAnimElement.style.webkitAnimationPlayState = "paused") {
        skillsLineGhostAnimElement.style.webkitAnimationPlayState = "running"
    }
})

// animation fantome experience
var expLineGhostAnimElement = document.querySelector ('#expLineGhostAnim');
expLineGhostAnimElement.style.webkitAnimationPlayState = "paused";

expLineGhostAnimElement.addEventListener('click', function() {
    expLineGhostAnimElement.style.webkitAnimationPlayState = "running";
})

expLineGhostAnimElement.addEventListener('mouseover', function() {
    expLineGhostAnimElement.src = 'assets/img/ghost_green2.png'
    if (expLineGhostAnimElement.style.webkitAnimationPlayState = "running") {
        expLineGhostAnimElement.style.webkitAnimationPlayState = "paused"
    }
})
expLineGhostAnimElement.addEventListener('mouseout', function() {
    expLineGhostAnimElement.src = 'assets/img/ghost_green.png'
    if (expLineGhostAnimElement.style.webkitAnimationPlayState = "paused") {
        expLineGhostAnimElement.style.webkitAnimationPlayState = "running"
    }
})

// animation fantome formation
var educLineGhostAnimElement = document.querySelector ('#educLineGhostAnim');
educLineGhostAnimElement.style.webkitAnimationPlayState = "paused";

educLineGhostAnimElement.addEventListener('click', function() {
    educLineGhostAnimElement.style.webkitAnimationPlayState = "running";
})

educLineGhostAnimElement.addEventListener('mouseover', function() {
    educLineGhostAnimElement.src = 'assets/img/ghost_light_green.png'
    if (educLineGhostAnimElement.style.webkitAnimationPlayState = "running") {
        educLineGhostAnimElement.style.webkitAnimationPlayState = "paused"
    }
})
educLineGhostAnimElement.addEventListener('mouseout', function() {
    educLineGhostAnimElement.src = 'assets/img/ghost_light_green2.png'
    if (educLineGhostAnimElement.style.webkitAnimationPlayState = "paused") {
        educLineGhostAnimElement.style.webkitAnimationPlayState = "running"
    }
})

// animation fantome à propos
var aboutLineGhostAnimElement = document.querySelector ('#aboutLineGhostAnim');
aboutLineGhostAnimElement.style.webkitAnimationPlayState = "paused";

aboutLineGhostAnimElement.addEventListener('click', function() {
    aboutLineGhostAnimElement.style.webkitAnimationPlayState = "running";
})

aboutLineGhostAnimElement.addEventListener('mouseover', function() {
    aboutLineGhostAnimElement.src = 'assets/img/ghost_blue2.png'
    if (aboutLineGhostAnimElement.style.webkitAnimationPlayState = "running") {
        aboutLineGhostAnimElement.style.webkitAnimationPlayState = "paused"
    }
})
aboutLineGhostAnimElement.addEventListener('mouseout', function() {
    aboutLineGhostAnimElement.src = 'assets/img/ghost_blue.png'
    if (aboutLineGhostAnimElement.style.webkitAnimationPlayState = "paused") {
        aboutLineGhostAnimElement.style.webkitAnimationPlayState = "running"
    }
})