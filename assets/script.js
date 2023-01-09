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

document.addEventListener('DOMContentLoaded', function () {
    //Modal js
    var modalbuttons = document.querySelectorAll('[data-modal-target]');
    var modalClosebuttons = document.querySelectorAll('[data-modal-dismiss]');
    modalbuttons.forEach(function (modalbutton) {
        modalbutton.addEventListener("click", function (event) {
            event.stopPropagation();
            var modalId = modalbutton.getAttribute("data-modal-target");
            var modal = document.querySelector(modalId);
            modal.classList.remove("hidden");
            setTimeout(function () {
                modal.classList.add("open");
            }, 100)
            clearTimeout();
        });
    });
    //Close modal when it is clicked on modal close button
    modalClosebuttons.forEach(function (modalClosebutton) {
        modalClosebutton.addEventListener("click", function (event) {
            event.stopPropagation();
            var modal = modalClosebutton.closest('.modal.open');
            modal.classList.remove("open");
            setTimeout(function () {
                modal.classList.add("hidden");
            }, 300)
            clearTimeout();
        });
    });


    // Close modal when it is clicked outside
    // document.addEventListener("click", function(event) {
    //     var modals = document.querySelectorAll('.modal.open');
    //     modals.forEach(function(modal) {
    //     if (event.target !== modal && !modal.contains(event.target)) {
    //         modal.classList.remove("open");
    //         setTimeout(function(){
    //             modal.classList.add("hidden");
    //         },300)
    //         clearTimeout();
    //     }
    //     });
    // });

    //Modal js end


});//DOMContentLoaded end