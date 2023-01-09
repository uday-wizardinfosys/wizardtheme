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
    /* Navigation Menu Dropdown */
    document.addEventListener('DOMContentLoaded', function() { 
        
        const dropdown = document.querySelectorAll(".dropdown");
        const subdropdown = document.querySelectorAll(".sub_dropdown");
        document.body.addEventListener('click', function(){
            remove_dropdown(dropdown);
            remove_megamenu(megamenu_dropdown);    
        });

        dropdown.forEach(function(item){            
            item.addEventListener('click', function (e){
                if(!item.querySelector('.dropdown-menu').classList.contains('active')){
                    remove_dropdown(dropdown);
                    remove_megamenu(megamenu_dropdown); 
                }     
                item.querySelector('.dropdown-toggle').classList.toggle('opened');
                item.querySelector('.dropdown-menu').classList.toggle('active');
                e.stopPropagation(); 
            }); 
            item.querySelector('.dropdown-menu').addEventListener('click', function(e){
                e.stopPropagation();
            }); 
        });
        subdropdown.forEach(function(items){
            items.addEventListener('click', function (e){
                e.stopPropagation();
                document.querySelector('.sub_dropdown-toggle').classList.remove('opened');
                document.querySelector('.sub_dropdown-menu').classList.remove('active');
                items.querySelector('.sub_dropdown-toggle').classList.toggle('opened');
                items.querySelector('.sub_dropdown-menu').classList.toggle('active');
            });
            item.querySelector('.sub_dropdown-menu').addEventListener('click', function(e){
                e.stopPropagation();
            });
        });
        megamenu_dropdown.forEach(function(item){
            item.addEventListener('click', function (e){
                e.stopPropagation(); 
                if(!item.querySelector('.megamenu_dropdown_wrap').classList.contains('active')){
                    remove_dropdown(dropdown);
                    remove_megamenu(megamenu_dropdown); 
                }  
                item.querySelector('.megamenu_dropdown-toggle').classList.toggle('opened');
                item.querySelector('.megamenu_dropdown_wrap').classList.toggle('active');
            });
            item.querySelector('.megamenu_dropdown_wrap ').addEventListener('click', function(e){
                e.stopPropagation();
            }); 
        });
        
        function remove_dropdown(dropdown){
            dropdown.forEach(function($item){                
                $item.querySelector('.dropdown-toggle').classList.remove('opened');
                $item.querySelector('.dropdown-menu').classList.remove('active');                    
            });
        } 
        function remove_megamenu(megamenu_dropdown){
            megamenu_dropdown.forEach(function($item){                
                $item.querySelector('.megamenu_dropdown-toggle').classList.remove('opened');
                $item.querySelector('.megamenu_dropdown_wrap').classList.remove('active');                    
            });
        }
    });   