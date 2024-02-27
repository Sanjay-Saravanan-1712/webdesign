window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
        navbar.style.backgroundColor = '#ff9800';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('nav ul li a').forEach(function(anchor) {
    anchor.addEventListener('mouseover', function() {
        this.style.color = '#ff9800';
    });

    anchor.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
});