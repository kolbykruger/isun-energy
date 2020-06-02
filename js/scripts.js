//Animations
$(document).ready(function() {
    var controller = new ScrollMagic.Controller;
    document.body.classList.add('animation-active');
    $("section").each(function() {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.75,
            reverse: true
        }).setClassToggle(this, "active").addTo(controller)
        .addTo(controller);
    })
});

//Blog Categories (if a selectbox)
let blogCategories = {
    elem: document.querySelector('select#blog_categories'),
    init: function() {
        if (this.elem) {
            this.elem.addEventListener('change', function(e) {
                window.location.href = window.location.href.split('?')[0] + '?category=' + e.target.value
            });
        }
    }
}.init();

//Video Scroll
var videoScroll = document.querySelector('.video-scroll');
if (videoScroll) {
    videoScroll.addEventListener('click', function() {
        window.scroll({
            top: document.querySelector('.introduction').getBoundingClientRect().bottom + window.scrollY,
            behavior: 'smooth'
        });
    })
}

//Responsive iFrame
$('iframe[src*="youtube"],iframe[src*="vimeo"]').wrap('<div class="responsive-iframe"/>');

//Accordion
document.addEventListener('DOMContentLoaded', function() {
    let accordion = document.querySelectorAll('.accordion-title');

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            let panel = this.nextElementSibling;

            if (panel.style.maxHeight){
                this.classList.remove('open');
                panel.style.maxHeight = null;
                panel.setAttribute('aria-hidden', true);
                panel.setAttribute('aria-expanded', false);
            } else {
                this.classList.add('open');
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.setAttribute('aria-hidden', false);
                panel.setAttribute('aria-expanded', true);
            }
        });
    }
});

//Flickity Carousel
$('.carousel .group').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 8000,
});

//Universal Tables
$('table').wrap("<div class='universal-table'></div>");
