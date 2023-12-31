$(function () {

   $(".header__rating-stars").rateYo({
      rating: 4.5,
      maxValue: 5,
      numStars: 5,
      halfStar: false,


      starWidth: "30px",
      normalFill: "#D7D1C7",
      ratedFill: "#FFB648",
      readOnly: false,
      spacing: "6px",



   });
   Fancybox.bind("[data-fancybox]", {
      
   });
   $('.testimonials__slider').slick({
      arrows: false,
      dots: false,
      slidesToShow: 2,
      infinite: true,
      draggable: true,
      appendArrows: $('.testimonials__slider-arrows'),
      responsive: 
         [
            {
               breakpoint: 1238,
               settings: {
                  slidesToShow: 1,
                  dots: true
               }
            }
         ]
   })
   $('.testimonials__slider-prev').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickPrev')
   })
   $('.testimonials__slider-next').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickNext')
   })


   $('.faq__accordeon-orange').on('click', function (e) {
      e.preventDefault()
      $(this).toggleClass('faq__accordeon-orange--active')
   })
   $('.faq__accordeon-orange-1').on('click', function () {
      $('.faq__accordeon-answer-1').slideToggle()
   })
   $('.faq__accordeon-orange-2').on('click', function () {
      $('.faq__accordeon-answer-2').slideToggle()
   })
   $('.faq__accordeon-orange-3').on('click', function () {
      $('.faq__accordeon-answer-3').slideToggle()
   })
   $('.faq__accordeon-orange-4').on('click', function () {
      $('.faq__accordeon-answer-4').slideToggle()
   })
   $('.faq__accordeon-orange-5').on('click', function () {
      $('.faq__accordeon-answer-5').slideToggle()
   })

   $('.burger').on('click', function (e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
   })

   setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open')) {
         $('.burger').addClass('burger--follow')
      } else {
         $('.burger').removeClass('burger--follow')
      }
   }, 0)

   $('.footer__logo').on('click', function (e) {
      e.preventDefault()
   })
   $('.footer__nav-link').on('click', function (e) {
      e.preventDefault()
   })
   $('.footer__nav-link').on('click', function () {
      $('.footer__nav').slideToggle()
   })
   $('.aboutus__grid-item').on('click', function (e) {
      e.preventDefault()
   })
   $('.aboutus__link-direction').on('click', function (e) {
      e.preventDefault()
   })
   $('.process__button-btn').on('click', function (e) {
      e.preventDefault()
   })
   $('.cta__button').on('click', function (e) {
      e.preventDefault()
   })
   $('.blog__links').on('click', function (e) {
      e.preventDefault()
   })
   $('.footer__socials-item').on('click', function (e) {
      e.preventDefault()
   })


      $(".links").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
   });
      $(".footer__links").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
   });

});

