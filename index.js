document.getElementById('menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    document.getElementById('menu-btn').classList.toggle('active');
});
// Close the navbar when clicking outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#menu-btn') && !event.target.matches('.navbar')) {
        document.querySelector('.navbar').classList.remove('active');
        document.getElementById('menu-btn').classList.remove('active');
    }
})

window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top-btn');
  
    if (window.pageYOffset > 300) { // Adjust this value based on your needs
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  document.getElementById('back-to-top-btn').addEventListener('click', function() {
    window.scrollTo(0, 0);
  });
  

