// Your code goes here

// set some common DOM elements as variables
const body = document.querySelector('body'),
navLinks = document.querySelectorAll('.nav-link');


// 1. change the text color to crimson on mouseenter
const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseenter', function() {
    footerText.style.color = 'crimson';
});

// 2. mouseleave Change the color to grey on mouse leave //
const footer = document.querySelector('.footer');
footer.addEventListener('mouseleave', function(){
    footer.style.background = 'grey';
});

// 3. mousedown to change width to 200px //
const photo = document.querySelector('.img-content img')
photo.addEventListener('mousedown', function(){
    photo.style.width ='200px';
});

// 4. double click to change display to none //
const intro = document.querySelector('.intro img')
intro.addEventListener('dblclick', function() {
    intro.style.display = 'none';
});

// 5. mouseover to change text color to crimson //
const inverseText = document.querySelector('.inverse-content .text-content')
inverseText.addEventListener('mouseover', function() {
    inverseText.style.color = 'crimson';
});

// 6. mousemove to change text and background color //
const destination = document.querySelector('.content-pick')
destination.addEventListener('mousemove', function() {
    destination.style.color = 'green';
    destination.style.background = 'lightgrey';
});

// 7. mouseout to change heading to crimson //
const destinationText = document.querySelector('.content-destination h2')
destinationText.addEventListener('mouseout', function() {
    destinationText.style.color = 'crimson';
});

// 8. wheel to change header to yellow //
const header = document.querySelector('header')
header.addEventListener('wheel', function() {
    header.style.background = 'yellow';
});

// 9. mouseup to highlight nav items green //
const nav = document.querySelector('.nav');
nav.addEventListener('mouseup', function() {
    nav.style.background = 'green';
});


// 10. stop navigation items from refreshing the page //
// mouseover to update nav links styles //
// click to update nav links based on active pages + event propagation //
for (const navLink of navLinks) {
    navLink.addEventListener('click', (event) => {
    event.stopPropagation()
    event.preventDefault();
    });
};