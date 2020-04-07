// Your code goes here

const navigation = document.querySelectorAll('a')
navigation.forEach(navigation => {
    event.preventDefault();
    navigation.addEventListener('click', function () {
        navigation.style.color = 'purple';
    });


const footerText = document.querySelector('.footer p') 
footerText.addEventListener('mouseenter', function() {
    footerText.style.color = 'gold';
});