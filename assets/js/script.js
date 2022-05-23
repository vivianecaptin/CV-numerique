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
//declaration des id sections
var meElement = document.querySelector('#me');
var skillsElement = document.querySelector('#skills');
var expElement = document.querySelector('#experience');
var educElement = document.querySelector('#education');
var aboutElement = document.querySelector('#about');

var navbarElement = document.querySelector('#navbar');

// déclaration des variable pour le calcul de la taille des blocs
var mePosition ;
var skillsPosition ;
var expPosition ;
var educPosition ;
var aboutPosition ;

// fonction calcul de la hauteur des blocs
function calcSizeBlock(){
    mePosition = meElement.offsetTop + meElement.offsetHeight - navbarElement.offsetHeight;
    skillsPosition = meElement.offsetTop + meElement.offsetHeight - navbarElement.offsetHeight;
    expPosition = skillsElement.offsetTop + skillsElement.offsetHeight - navbarElement.offsetHeight;
    educPosition = expElement.offsetTop + expElement.offsetHeight - navbarElement.offsetHeight;
    aboutPosition = educElement.offsetTop + educElement.offsetHeight - navbarElement.offsetHeight;
}


// apel de la fonction au chargement de la page
calcSizeBlock();

// ajout class pour changement couleur du lien actif de la navbar
//selection de tout les nav-items
var navItems = document.querySelectorAll ('.nav-link')
//ecroute scroll for of  BOUCLE les nav items
window.addEventListener('scroll', function() {
    calcSizeBlock();
    //me - bloc présentation // boucle sur les nav-link pour remouve la class active
    if (window.scrollY < mePosition) {
        for (navItem of navItems) {
            navItem.classList.remove("activeLink");
        }
    }
    // boucle sur les nav-link pour remouve active ajout juste sur la bonne section
    //skills
    else if (window.scrollY > skillsPosition && window.scrollY < expPosition && !document.querySelector('.linkSkills').classList.contains("activeLink")) {
        for (navItem of navItems) {
            navItem.classList.remove("activeLink");
        }
        document.querySelector('.linkSkills').classList.add("activeLink");

    // experience - bloc expérience pro
    }
    else if (window.scrollY > expPosition && window.scrollY < educPosition && !document.querySelector('.linkExp').classList.contains("activeLink")) {
        for (navItem of navItems) {
            navItem.classList.remove("activeLink");
        }
        document.querySelector('.linkExp').classList.add("activeLink");

    // eduction - bloc formation
    }
    else if (window.scrollY > educPosition && window.scrollY < aboutPosition && !document.querySelector('.linkEduc').classList.contains("activeLink")) {
        for (navItem of navItems) {
            navItem.classList.remove("activeLink");
        }
        document.querySelector('.linkEduc').classList.add("activeLink");    
    // about - bloc à propos
    }
    else if(window.scrollY > aboutPosition && !document.querySelector('.linkAbout').classList.contains("activeLink")) {
        for (navItem of navItems) {
            navItem.classList.remove("activeLink");
        }
        document.querySelector('.linkAbout').classList.add("activeLink");
    }
})


//ecoute scroll pour changements dans la navbar
window.addEventListener('scroll', function() {
    //appel de la fonction da la taille des sections en fonction du scroll sur l'écran utilisé
    calcSizeBlock();

    //me - bloc présentation
    if (window.scrollY < mePosition) {
        navbarElement.style.backgroundColor = '#A6CDCF';
        imgGhostNav2.src = 'assets/img/ghost_green2.png';
        imgGhostNav1.src = 'assets/img/ghost_green.png';
    }
    //skills - bloc compétences
    else if (window.scrollY > skillsPosition && window.scrollY < expPosition) {
        navbarElement.style.backgroundColor = '#FFD4D0';
        imgGhostNav2.src = 'assets/img/ghost_red2.png';
        imgGhostNav1.src = 'assets/img/ghost_red.png';
    }
    // experience - bloc expérience pro
    else if (window.scrollY > expPosition && window.scrollY < educPosition) {
        navbarElement.style.backgroundColor = '#E4F0F1';
        imgGhostNav2.src = 'assets/img/ghost_blue2.png';
        imgGhostNav1.src = 'assets/img/ghost_blue.png';
    }
    // eduction - bloc formation
    else if (window.scrollY > educPosition && window.scrollY < aboutPosition) {
        navbarElement.style.backgroundColor = '#5E87BB';
        imgGhostNav2.src = 'assets/img/ghost_light_green2.png';
        imgGhostNav1.src = 'assets/img/ghost_light_green.png';
    }
    // about - bloc à propos
    else if (window.scrollY > aboutPosition) {
        navbarElement.style.backgroundColor = '#E4F0F1';
        imgGhostNav2.src = 'assets/img/ghost_green2.png';
        imgGhostNav1.src = 'assets/img/ghost_green.png';
    }
})




// animation fantome présentation
var meLineGhostAnimElement = document.querySelector ('#meLineGhostAnim');
var imgGhostBlueAnim = document.querySelector ('.imgGhostBlue');
// meLineGhostAnimElement.style.webkitAnimationPlayState = "paused";

imgGhostBlueAnim.addEventListener('click', function() {
    // meLineGhostAnimElement.style.webkitAnimationPlayState = "running";
    imgGhostBlueAnim.classList.remove("imgGhostBlue");
    imgGhostBlueAnim.classList.add("imgGhostBlue")

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

// déclanchement animation blocs compétences
var blocSkillsElmts = document.querySelectorAll('.bloc');

window.addEventListener('scroll', function() {
    calcSizeBlock();

    if (window.scrollY > (skillsPosition/2)) {
        for(bloc of blocSkillsElmts) {
            bloc.style.opacity = 1;
        }
    }
})

// déclanchement animation blocs expérience
// var blocExpAlphaP = document.querySelector('.alphaPic');
// var blocExpActesPro = document.querySelector('.actesPro');
// var blocExpCgp = document.querySelector('.pompidou');

// blocExpAlphaP.style.webkitAnimationPlayState = "paused";
// blocExpActesPro.style.webkitAnimationPlayState = "paused";
// blocExpCgp.style.webkitAnimationPlayState = "paused";

// window.addEventListener('scroll', function() {
//     calcSizeBlock();

//     if (window.scrollY > (expPosition - (expPosition/4))) {
//         blocExpAlphaP.style.webkitAnimationPlayState = "running";
//         blocExpActesPro.style.webkitAnimationPlayState = "running";
//         blocExpCgp.style.webkitAnimationPlayState = "running";
//     }
// })

// déclanchement animation blocs diplomes
var blocEducElmts = document.querySelectorAll('.blocEduc');

window.addEventListener('scroll', function() {
    calcSizeBlock();

    if (window.scrollY > (educPosition - (educPosition/4))) {
        for(blocEduc of blocEducElmts) {
            blocEduc.style.opacity = 1;
        }
    }
})

// déclanchement animation blocs à propos
var blocPersonality = document.querySelector('.personality');
var blocInterests = document.querySelector('.interests');

blocPersonality.style.animationPlayState = "paused";
blocInterests.style.animationPlayState = "paused";

window.addEventListener('scroll', function() {
    calcSizeBlock();
    if (window.scrollY > aboutPosition) {
        console.log(aboutPosition);
        console.log(aboutPosition - (aboutPosition/3));

        blocPersonality.style.animationPlayState = "running";
        blocInterests.style.animationPlayState = "running";
    }
})