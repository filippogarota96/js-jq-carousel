$(function(){
  // eventi
  $('.prev').click(
    function(){
      prevImg();
      prevBullet();
  });


  $('.next').click(
  function() {
    nextImg();
    nextBullet();

  });

  $(document).keydown(
    function(event){
      // freccia destra
      if (event.keyCode == 39) {
        nextImg();
        nextBullet();
      }
      // freccia sinistra
      if (event.keyCode == 37){
        prevImg();
        prevBullet();
      }
    }
  );

// cliccando sul bullet questo e l'img corrispondente diventano active
  var clickBullet = $(".nav .fas.fa-circle");
  clickBullet.click(
    function() {
      var img = $('.images img');
      var imgAndBullet = clickBullet.index($(this));
      $(".nav").children().removeClass('active');
      $(this).addClass('active');
      img.removeClass('active');
      img.eq(imgAndBullet).addClass("active");
    }
  );


  // creo delle funzioni per far funzionare gli eventi
  function nextImg () {
    var imgActive = $('.images img.active');
    imgActive.removeClass('active');
    if (imgActive.hasClass('last') == true) {
      $('.images img.first').addClass('active');
    } else {
      imgActive.next().addClass('active');
    }
  };
  function prevImg() {
    // scorrimento immagini all'indietro
    var imgActive = $('.images img.active')
    imgActive.removeClass('active');
    if (imgActive.hasClass('first') == true) {
      $('.images img.last').addClass('active');
    } else {
      imgActive.prev().addClass('active');
    }
  }

  function nextBullet() {
    // scorrimento dei bullet in avanti
    var bulletActive = $('.nav > i.active');
    bulletActive.removeClass('active');
    if (bulletActive.hasClass("last") == true) {
      $(".nav > i.first").addClass('active');
    } else {
      bulletActive.next().addClass('active');
    }
  }

  function prevBullet() {
    // scorrimento dei bullet all'indietro
    var bulletActive = $('.nav > i.active');
    bulletActive.removeClass('active');
    if (bulletActive.hasClass("first") == true) {
      $(".nav > i.last").addClass('active');
    } else {
      bulletActive.prev().addClass('active');
    }
  }
});
