ScrollReveal().reveal('.site', {delay: 1000});

sayHi("User"); // Hello, User

function sayHi(name) {
  alert( `Hello, ${name}` );
};

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