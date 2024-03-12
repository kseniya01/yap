ScrollReveal().reveal('.site', {delay: 500});

ScrollReveal().reveal('.head1', {delay: 2000});

ScrollReveal().reveal('.items');
ScrollReveal().reveal('#sidebar .column', { container: '#sidebar' });

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