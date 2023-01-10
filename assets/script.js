var header = document.querySelector('.header-wrapper');

window.addEventListener('scroll', function () {
    if (document.getElementsByClassName('header-fixed').length) {
        if (window.scrollY > header.offsetHeight) {
            document.querySelector('.header-fixed').classList.add('header-scrolled');
            document.querySelector('.header-fixed').classList.add('header-scroll-bg');
        } else {
            document.querySelector('.header-fixed').classList.remove('header-scrolled');
            document.querySelector('.header-fixed').classList.remove('header-scroll-bg');
        }
    }
});
/* Quickview Modal */
customElements.define('modal-opener', class extends HTMLElement {
    constructor() {            
        super();               
        let modalClosebuttons = this.querySelectorAll('[data-modal-dismiss="modal"]');   
        let modalbuttons = document.querySelectorAll('[data-modal-target]');   
        this.body = document.querySelector('body');    
        modalClosebuttons.forEach((element) => {
            element.addEventListener('click', this.close.bind(this));            
        });
        modalbuttons.forEach((element) => {          
            element.addEventListener('click', this.open.bind(this));                       
        });                     
    }     
    open(event){     
        event.preventDefault();         
        var target = event.explicitOriginalTarget.dataset.modalTarget;
        var modal = document.querySelector(target);       
        this.body.classList.add('noscroll');
        modal.classList.remove('hidden');
        setTimeout(function () {
            modal.classList.add('open');
        }, 100)
        clearTimeout();        
    }
    close(){              
        this.body.classList.remove('noscroll');        
        this.classList.remove('open');           
        this.classList.add('hidden');            
    }
});
/* End Quickview Modal */

document.addEventListener('DOMContentLoaded', function () {
    //Modal js
    // var modalbuttons = document.querySelectorAll('[data-modal-target]');
    // var modalClosebuttons = document.querySelectorAll('[data-modal-dismiss]');
    // modalbuttons.forEach(function (modalbutton) {
    //     modalbutton.addEventListener("click", function (event) {
    //         event.stopPropagation();
    //         var modalId = modalbutton.getAttribute('data-modal-target');
    //         var modal = document.querySelector(modalId);
    //         document.querySelector('body').classList.add('noscroll');
    //         modal.classList.remove('hidden');
    //         setTimeout(function () {
    //             modal.classList.add('open');
    //         }, 100)
    //         clearTimeout();
    //     });
    // });
    // //Close modal when it is clicked on modal close button
    // modalClosebuttons.forEach(function (modalClosebutton) {
    //     modalClosebutton.addEventListener("click", function (event) {
    //         event.stopPropagation();
    //         var modal = modalClosebutton.closest('.modal.open');
    //         document.querySelector('body').classList.remove('noscroll');
    //         modal.classList.remove('open');
    //         setTimeout(function () {
    //             modal.classList.add('hidden');
    //         }, 300)
    //         clearTimeout();
    //     });
    // });
 
    // Close modal when it is clicked outside
    // document.addEventListener("click", function (event) {
    //     var modals = document.querySelectorAll('.modal.open');
    //     modals.forEach(function (modal) {
    //         if (event.target !== modal && !modal.contains(event.target)) {
    //             document.querySelector('body').classList.remove('noscroll');
    //             modal.classList.remove('open');
    //             setTimeout(function () {
    //                 modal.classList.add('hidden');
    //             }, 300)
    //             clearTimeout();
    //         }
    //     });
    // });
    //Modal js end


    /* Navigation Menu Dropdown */
    const dropdown = document.querySelectorAll(".dropdown");
    const subdropdown = document.querySelectorAll(".sub_dropdown");
    const megamenu_dropdown = document.querySelectorAll(".megamenu_dropdown");
    document.body.addEventListener('click', function () {
        remove_dropdown(dropdown);
        remove_megamenu(megamenu_dropdown);
    });

    dropdown.forEach(function (item) {
        item.addEventListener('click', function (e) {
            if (!item.querySelector('.dropdown-menu').classList.contains('active')) {
                remove_dropdown(dropdown);
                remove_megamenu(megamenu_dropdown);
            }
            item.querySelector('.dropdown-toggle').classList.toggle('opened');
            item.querySelector('.dropdown-menu').classList.toggle('active');
            e.stopPropagation();
        });
        item.querySelector('.dropdown-menu').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

    subdropdown.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            item.querySelector('.sub_dropdown-toggle').classList.toggle('opened');
            item.querySelector('.sub_dropdown-menu').classList.toggle('active');
        });
        item.querySelector('.sub_dropdown-menu').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
    megamenu_dropdown.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            if (!item.querySelector('.megamenu_dropdown_wrap').classList.contains('active')) {
                remove_dropdown(dropdown);
                remove_megamenu(megamenu_dropdown);
            }
            item.querySelector('.megamenu_dropdown-toggle').classList.toggle('opened');
            item.querySelector('.megamenu_dropdown_wrap').classList.toggle('active');
        });
        item.querySelector('.megamenu_dropdown_wrap ').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

    function remove_dropdown(dropdown) {
        dropdown.forEach(function ($item) {
            $item.querySelector('.dropdown-toggle').classList.remove('opened');
            $item.querySelector('.dropdown-menu').classList.remove('active');
        });
    }
    function remove_megamenu(megamenu_dropdown) {
        megamenu_dropdown.forEach(function ($item) {
            $item.querySelector('.megamenu_dropdown-toggle').classList.remove('opened');
            $item.querySelector('.megamenu_dropdown_wrap').classList.remove('active');
        });
    }
});//DOMContentLoaded end
