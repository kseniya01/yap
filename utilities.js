window.onload = function() {
    ScrollReveal().reveal('.site', {delay: 1000});
}

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