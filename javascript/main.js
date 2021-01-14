const btnHamburger = document.querySelector('#header__hamburger-menu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');

    if(header.classList.contains('open')){ //close
        header.classList.remove('open');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
    }
    else{ //open
        header.classList.add('open');
        overlay.classList.remove('fade-out'); 
        overlay.classList.add('fade-in');
    }
    
});