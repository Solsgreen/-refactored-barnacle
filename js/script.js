$(document).ready(function(){
  $("#about").click(function(){
    $('html, body').animate({
      scrollTop: $("#about-us").offset().top
    }, 1000);
  });

  $("#process").click(function(){
    $('html, body').animate({
      scrollTop: $("#our-process").offset().top
    }, 1000);
  });

  $("#products").click(function(){
    $('html, body').animate({
      scrollTop: $("#our-products").offset().top
    }, 1000);
  });

  $("#2017").click(function(){
    $('html, body').animate({
      scrollTop: $("#schedule").offset().top
    }, 1000);
  });

  $("#contact").click(function(){
    $('html, body').animate({
      scrollTop: $("#footer").offset().top
    }, 1000);
  });


});
