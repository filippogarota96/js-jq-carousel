$(function(){

  $('.prev').click(function(){
    // scorrimento immagini all'indietro
    var imgActive = $('.images img.active')
    if (imgActive.hasClass('first') == true) {
     $('.images img.last').addClass('active');
    }
    imgActive.removeClass('active');
    imgActive.prev().addClass('active');
    // scorrimento dei bullet all'indietro
    var bulletActive = $('.nav > i.active');
    if (bulletActive.hasClass("first") == true) {
      $(".nav > i.last").addClass('active');
    }
    bulletActive.removeClass('active');
    bulletActive.prev().addClass('active');
  });


  $('.next').click(function(){
    // scorrimento immagini in avanti
    var imgActive = $('.images img.active')
    if (imgActive.hasClass('last') == true) {
      $('.images img.first').addClass('active');
    }
    imgActive.removeClass('active');
    imgActive.next().addClass('active');
    // scorrimento dei bullet in avanti
    var bulletActive = $('.nav > i.active');
    if (bulletActive.hasClass("last") == true) {
      $(".nav > i.first").addClass('active');
    }
    bulletActive.removeClass('active');
    bulletActive.next().addClass('active');


  });


});
