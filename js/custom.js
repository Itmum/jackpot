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
      