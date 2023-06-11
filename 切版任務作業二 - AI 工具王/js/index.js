$(document).ready(function () {
    $('#scrollToTop').click(function () { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        
    });
    });