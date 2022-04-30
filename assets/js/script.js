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