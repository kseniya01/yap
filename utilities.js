ScrollReveal().reveal('.head1', {delay: 1000});

ScrollReveal().reveal('.head2', {delay: 1500});

ScrollReveal().reveal('.desc', {delay: 1500});

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