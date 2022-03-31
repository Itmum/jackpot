$(document).ready(function () {
    $(".boxscroll").niceScroll({
        cursorcolor: "#1f004f",
        cursoropacitymin: 0.3,
        background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(41,10,89,1) 100%)",
        cursorborder: "0",
        autohidemode: false,
        cursorwidth:5,
        cursorminheight: 20
    });
    $('#ascrail2000').show();
});

   //  Stykey Header  
   $(window).scroll(function() {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
        $('.navbar').addClass('sticky-header');
    } else {
        $('.navbar').removeClass('sticky-header');
    }
});
//  Stykey Header



  $('.game-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true
  });

  $(window).click(function(e) {

    if($(".navbar-collapse").hasClass("show")){
       $('.navbar-collapse').removeClass("show"); 
       e.preventDefault();
       }
 });
  $('.navbar-collapse').click(function(event){
      event.stopPropagation();
  });
      

  //about slick
  $('.about-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });