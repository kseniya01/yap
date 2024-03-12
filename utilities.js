ScrollReveal().reveal('.site', {delay: 1000});

ScrollReveal().reveal('.headline');

ScrollReveal().reveal('.items');
ScrollReveal().reveal('#sidebar .items', { container: '#sidebar' });

// Standard function 
function clickOMatic() {
    alert('Hello!');
};

window.onload = function() {
    const click = document.getElementById('click');
    
    click.addEventListener("click", (event) => {
        clickOMatic();
    });
};

sayHi("User"); // Hello, User

function sayHi(name) {
  alert( `Hello, ${name}` );
};