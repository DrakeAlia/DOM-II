// Your code goes here

// 1. change the text color to crimson on mouse enter
const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseenter', function() {
    footerText.style.color = 'crimson';
})

// 2. mouseleave Change the color to grey on mouse leave //
const footer = document.querySelector('.footer');
footer.addEventListener('mouseleave', function(){
    footer.style.background = 'grey';
})

// 3. click mouse down to change width to 200px //
const photo = document.querySelector('.img-content img')
photo.addEventListener('mousedown', function(){
    photo.style.width ='200px';
})

// 4. double click to change display to none //
const intro = document.querySelector('.intro img')
intro.addEventListener('dblclick', function() {
    intro.style.display = 'none';
})

// 5. keyup to change body to orange //
const body = document.querySelector('body')
body.addEventListener('keyup', function() {
    body.style.background = 'orange';
})

// 6. mouse over to change text color to crimson //
const inverseText = document.querySelector('.inverse-content .text-content')
inverseText.addEventListener('mouseover', function() {
    inverseText.style.color = 'crimson';
})

// 7. mouse move to change text and background color //
const destination = document.querySelector('.content-pick')
destination.addEventListener('mousemove', function() {
    destination.style.color = 'green';
    destination.style.background = 'lightgrey';
})

// 8. mouse to change heading to crimson //
const destinationText = document.querySelector('.content-destination h2')
destinationText.addEventListener('mouseout', function() {
    destinationText.style.color = 'crimson';
})

// 9. wheel to change header to yellow //
const header = document.querySelector('header')
header.addEventListener('wheel', function() {
    header.style.background = 'yellow';
})

// 10. mouse up to highlight nav items green //
const nav = document.querySelector('.nav');
nav.addEventListener('mouseup', function() {
    nav.style.background = 'green';
})

// stop navigation items from refreshing the page //
const navigation = document.querySelectorAll('a');
 event.preventDefault();