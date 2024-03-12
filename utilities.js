ScrollReveal().reveal('.site', {delay: 1000});

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

<button onclick="one()">1</button>

<script>
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}
</script>