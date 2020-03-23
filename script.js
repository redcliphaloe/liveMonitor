;(function() {
    $(document).ready(function(){
        $(".menu, .navbar").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
            document.querySelector('.navbar-collapse').classList.remove('in');
        });
    });   
    
    let menuLinks = document.querySelectorAll(".scrollToAnchor");
    addToggleActiveMenuLinks(menuLinks); 
    
    function addToggleActiveMenuLinks(menuLinks) {
        for (let i = 0; i < menuLinks.length; i++) {
            let menuLink = menuLinks[i];      
            menuLink.addEventListener("click", function() {
                for (let i = 0; i < menuLinks.length; i++) {
                    menuLinks[i].classList.remove("menu__link--active");
                }       
                document.querySelectorAll('a[href="#' +  menuLink.href.split('#')[1] + '"]').forEach(element => {
                    element.classList.add("menu__link--active");
                });
            });	
        }
    }    

    const srcSliderImages = ['assets/images/screens.png', 'assets/images/sphere.png'];
    let srcSliderImagesIndex = 0;
    let lbutton = document.querySelector('.slider__button');
    let rbutton = document.querySelector('.slider__button--direction--right');
    let arrows = document.querySelectorAll('.slider__button');
    let limage = document.querySelector('.slider__image--left');
    let cimage = document.querySelector('.slider__image--center');
    let rimage = document.querySelector('.slider__image--right');
    let timerId = setTimeout(() => {
        rbutton.click();
    }, 5000);
    cimage.style.background = 'url("' + srcSliderImages[srcSliderImagesIndex] + '") no-repeat center / contain';        
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {    
            arrows.forEach(arrow => {
                arrow.disabled = 'true';
            });               
            clearTimeout(timerId);             
            if (arrow.classList.contains('slider__button--direction--right')) {
                srcSliderImagesIndex == 0 ? srcSliderImagesIndex = srcSliderImages.length - 1 : srcSliderImagesIndex--;
                rimage.style.background = 'url("' + srcSliderImages[srcSliderImagesIndex] + '") no-repeat center / contain';
                cimage.style.transform = 'translateX(-100%)';
                rimage.style.transform = 'translateX(-100%)';
                cimage.style.transition = 'transform linear 1s';
                rimage.style.transition = 'transform linear 1s'; 
            } else {
                srcSliderImagesIndex == srcSliderImages.length - 1 ? srcSliderImagesIndex = 0 : srcSliderImagesIndex++;
                limage.style.background = 'url("' + srcSliderImages[srcSliderImagesIndex] + '") no-repeat center / contain';
                limage.style.transform = 'translateX(100%)';
                cimage.style.transform = 'translateX(100%)';
                limage.style.transition = 'transform linear 1s';
                cimage.style.transition = 'transform linear 1s';  ; 
            }          
        });      
        arrow.addEventListener('click', function () {       
            timerId = setTimeout(() => {
                rbutton.click();
            }, 5000);                     
            if (arrow.classList.contains('slider__button--direction--right')) {
                setTimeout(() => {
                    cimage.style.transform = 'translateX(0)';
                    rimage.style.transform = 'translateX(0)';
                    cimage.style.transition = '';
                    rimage.style.transition = ''; 
                    cimage.style.background = rimage.style.background; 
                    arrows.forEach(arrow => {
                        arrow.disabled = '';
                    });  
                }, 1000);   
            } else {
                setTimeout(() => {
                    limage.style.transform = 'translateX(0)';
                    cimage.style.transform = 'translateX(0)';
                    limage.style.transition = '';
                    cimage.style.transition = '';      
                    cimage.style.background = limage.style.background;
                    arrows.forEach(arrow => {
                        arrow.disabled = '';
                    });                 
                }, 1000);                             
            }          
        });           
        
    });    
})();