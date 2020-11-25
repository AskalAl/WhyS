var last = document.querySelector('.last-name')
var namePosition = last.getBoundingClientRect().top;
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= namePosition) {
        last.style.position = 'fixed';
        last.style.top = '0px';
    } else {
        last.style.position = 'absolute';
        last.style.top = '1em';
    }
});

// document.querySelector('.last').style('marginLeft') = $('.title').width;
// $(".last").css( { marginLeft : "200px", marginRight : "200px" } );