window.onload = function() {
    ScrollReveal().reveal('h1.head1', {delay: 1000});
}

window.onload = function() {
    ScrollReveal().reveal('h2.head2', {delay: 2000});
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