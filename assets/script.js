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


        let child_dropdown = document.querySelectorAll("ul li#dropdown_menu");    
        var count = document.querySelectorAll("ul li#dropdown_menu").length;   
        console.log(count); 
        // child_dropdown.forEach(function (list) {
        //     console.log(list);
        // }); 
        // child_dropdown.onclick = function(e) {
        //     console.log('open click');
        //     if(this.querySelector('ul.dropdown-menu').classList.contains('active')){
        //         this.querySelector('ul.dropdown-menu').classList.remove('active');
        //         this.querySelector('button').classList.remove('opened'); 
        //     }else{
        //         this.querySelector('ul.dropdown-menu').classList.add('active'); 
        //         this.querySelector('button').classList.add('opened');
        //     }   
        //     e.stopPropagation();                   
        // };
       // let child_sub_dropdown = document.querySelector("ul li#dropdown_submenu");
        // child_sub_dropdown.onclick = function(e) {
        //     if(this.querySelector('ul.dropdown-menu').classList.contains('active')){
        //         this.querySelector('ul.dropdown-menu').classList.remove('active');
        //         this.querySelector('button').classList.remove('opened');
        //     }else{
        //         this.querySelector('ul.dropdown-menu').classList.add('active');
        //         this.querySelector('button').classList.add('opened');
        //     } 
        //     e.stopPropagation();         
        // };   
        // const fakeImages = document.querySelectorAll("ul li#dropdown_menu");
        // fakeImages.forEach(fakeImage => {
        // console.log('fakeImage: ', fakeImage);
        // });
        child_dropdown.forEach(function($item){
            $item.onclick = function(e) {
                child_dropdown.forEach(function($item){
                    $item.querySelector('ul.dropdown-menu').classList.remove('active');                    
                });
                if(this.querySelector('ul.dropdown-menu').classList.contains('active')){
                    this.querySelector('ul.dropdown-menu').classList.remove('active');
                    this.querySelector('button').classList.remove('opened'); 
                }else{
                    this.querySelector('ul.dropdown-menu').classList.add('active'); 
                    this.querySelector('button').classList.add('opened');
                }   
                let child_sub_dropdown = this.querySelector("ul li#dropdown_submenu");
                child_sub_dropdown.forEach(function($item){
                    $item.onclick = function(e) {
                        if(this.querySelector('ul.dropdown-menu').classList.contains('active')){
                            this.querySelector('ul.dropdown-menu').classList.remove('active');
                            this.querySelector('button').classList.remove('opened');
                        }else{
                            this.querySelector('ul.dropdown-menu').classList.add('active');
                            this.querySelector('button').classList.add('opened');
                        } 
                        e.stopPropagation();         
                    };  
                });    
                e.stopPropagation();                   
            };
        }); 

        document.body.addEventListener('click', function(e){
            console.log('dhruv',e.target.classList);
            if(!e.target.classList.contains('menu-link') && !e.target.classList.contains('dropdown-menu'))
            {
                console.log('close all menu');
                child_dropdown.forEach(function($item){
                    $item.querySelector('ul.dropdown-menu').classList.remove('active');  
                    $item.querySelector('button').classList.remove('opened');                  
                });
            }
        }, true); 

    //     var count_child_dropdown = document.querySelectorAll("ul li#dropdown_menu").length;   
    //    // console.log(count); 
    //     for (let i = 0; i < count_child_dropdown; i++) {
    //         let child_dropdown = document.querySelector("ul li#dropdown_menu"); 
    //         child_dropdown.onclick = function(e) {
    //             console.log('open click');
    //             if(this.querySelector('ul.dropdown-menu').classList.contains('active')){
    //                 this.querySelector('ul.dropdown-menu').classList.remove('active');
    //                 this.querySelector('button').classList.remove('opened'); 
    //             }else{
    //                 this.querySelector('ul.dropdown-menu').classList.add('active'); 
    //                 this.querySelector('button').classList.add('opened');
    //             }   
    //             e.stopPropagation();                   
    //         };            
    //         let count_child_sub_dropdown = this.querySelector("ul li#dropdown_submenu").length;
    //         for (let j = 0; j < count_child_sub_dropdown; j++) {
    //             let child_sub_dropdown = this.querySelector("ul li#dropdown_submenu");
    //             child_sub_dropdown.onclick = function(e) {
    //                 if(this.querySelector('ul.dropdown-menu').classList.contains('active')){
    //                     this.querySelector('ul.dropdown-menu').classList.remove('active');
    //                     this.querySelector('button').classList.remove('opened');
    //                 }else{
    //                     this.querySelector('ul.dropdown-menu').classList.add('active');
    //                     this.querySelector('button').classList.add('opened');
    //                 } 
    //                 e.stopPropagation();         
    //             };
    //         }    
    //     }  
    });    