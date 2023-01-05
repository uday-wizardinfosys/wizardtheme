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
        if(document.getElementsByClassName('header-fixed').length){
            if (window.scrollY > header.offsetHeight) {
                document.querySelector('.header-fixed').classList.add('header-scrolled');
                document.querySelector('.header-fixed').classList.add('header-scroll-bg');
            } else {
                document.querySelector('.header-fixed').classList.remove('header-scrolled');
                document.querySelector('.header-fixed').classList.remove('header-scroll-bg');
            }
        }    
    });

    document.addEventListener('DOMContentLoaded', function() {
        let child_dropdown = document.querySelector("ul li.dropdown");        
        child_dropdown.onclick = function() {
            if(this.querySelector('ul.dropdown-menu').classList.contains('active')){
                this.querySelector('ul.dropdown-menu').classList.remove('active'); 
            }else{
                this.querySelector('ul.dropdown-menu').classList.add('active'); 
            }                       
        };

        let child_sub_dropdown = document.querySelector("ul li.submenu");
        child_sub_dropdown.onclick = function() {
            this.querySelector('ul.dropdown-menu').classList.toggle('active');            
        };
    });    