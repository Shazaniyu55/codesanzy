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
});