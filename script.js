;(function() {
    document.querySelectorAll('.scrollToAnchor').forEach(element => {
        element.addEventListener('click', function () {
            var id  = $(event.target).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
            document.querySelector('.navbar-collapse').classList.remove('in');            
        })        
    });
})();