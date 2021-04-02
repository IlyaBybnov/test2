jQuery(function($){
    "use strict";

    $('.burger').click(function(event){
      $('.burger, .header__nav, .header__top').toggleClass('active');
      $('body').toggleClass('lock');

      
    });

    $('.shop-row-top').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,

      arrows: true,
      dots: false,
      appendArrows: $('.shop-row-top__slider-arrow'),
      prevArrow: $('.shop-row-top__arrow-left'),
      nextArrow: $('.shop-row-top__arrow-right'),
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    $('.shop-row-bottom').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,

      arrows: true,
      dots: false,
      appendArrows: $('.shop-row-bottom__slider-arrow'),
      prevArrow: $('.shop-row__arrow-left'),
      nextArrow: $('.shop-row__arrow-right'),
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    
    /*
    const screenWidth = window.screen.width;
    if (screenWidth < 1000) {
      let shiftSocialNets = $('.header__social-nets').html();
	    $('.header__social-nets').html($('.mobile').html());
      $('.mobile').html(shiftSocialNets);
    }
*/
    $('.gallery__body').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
          }
        }
      });
});
window.addEventListener('scroll', function(){
    const headerTop = document.querySelector(".header__top");
    headerTop.classList.toggle("sticky", window.scrollY > 0);
})



// начало (прячем блоки для мобильной версии)
const parent_original = document.querySelector('.social-nets');
const parent = document.querySelector('.header__nav');
const item = document.querySelector('.social-nets__list');

const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (viewport_width <= 1150) {
    if (!item.classList.contains('done')) {
      parent.insertBefore(item, parent.children[1]);
      item.classList.add('done');
    }
    } else {
      if (item.classList.contains('done')) {
        parent_original.insertBefore(item, parent_original.children[2]);
        item.classList.remove('done');
    }
  }

window.addEventListener('resize', function (event) {
  const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  //alert(viewport_width);
  if (viewport_width <= 1150) {
    if (!item.classList.contains('done')) {
      parent.insertBefore(item, parent.children[1]);
      item.classList.add('done');
    }
    } else {
      if (item.classList.contains('done')) {
        parent_original.insertBefore(item, parent_original.children[2]);
        item.classList.remove('done');
    }
  }
});
// конец (прячем блоки для мобильной версии)
