var header = document.querySelector('.header-wrapper');


// var header = document.querySelector('.annoucement-bar-wrapper');
//     //If it isn't "undefined" and it isn't "null", then it exists.
// if(typeof(header) != 'undefined' && header != null){
//     if (window.scrollY > header.offsetHeight) {
//         document.querySelector('.header-fixed').classList.add('header-scrolled');
//     } else {
//         document.querySelector('.header-fixed').classList.remove('header-scrolled');
//     }
// } else{
// 	alert('Element does not exist');
// }



    window.addEventListener('scroll', function() {
        if (window.scrollY > header.offsetHeight) {
            document.querySelector('.header-fixed').classList.add('header-scrolled');
            document.querySelector('.header-fixed').classList.add('header-scroll-bg');
        } else {
            document.querySelector('.header-fixed').classList.remove('header-scrolled');
            document.querySelector('.header-fixed').classList.remove('header-scroll-bg');
        }
    });