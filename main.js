$(function(){

  $('.prev').click(function(){
    var imgActive = $('.images img.active')
    if (imgActive.hasClass('first') == true) {
     $('.images img.last').addClass('active');
    }
    imgActive.removeClass('active');
    imgActive.prev().addClass('active');

  });


  $('.next').click(function(){
    var imgActive = $('.images img.active')
    if (imgActive.hasClass('last') == true) {
      $('.images img.first').addClass('active');
    }
    imgActive.removeClass('active');
    imgActive.next().addClass('active');

  });

});
