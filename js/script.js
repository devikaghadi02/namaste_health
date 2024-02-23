// aos animation
AOS.init();

// nav menu fixed
let mainMenu = document.querySelector('.main_menu');
window.addEventListener('scroll', () => {
    let scrooling = this.scrollY;
    if (scrooling > 150) {
        mainMenu.classList.add('menu_fixed');
    } else {
        mainMenu.classList.remove('menu_fixed');
    }
})

$('.testimonial_items').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

$('.nav_slider_items').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});