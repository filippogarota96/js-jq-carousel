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
      if (event.keyCode == 39) {
        nextImg();
        nextBullet();
      }

      if (event.keyCode == 37){
        prevImg();
        prevBullet();
      }

    }
  );

  // $(document).keypress(
  //   function(event){
  //     // nextImg();
  //     // nextBullet();
  //       console.log(event.keyCode);
  //   }
  // );

  $('.nav .fas.fa-circle').click(
    function(){
      if (button.hasClass('active')) {
        button.removeClass('active')
      } else {
        $(this).addClass('active');
      }
    });





// creo delle funzioni per far funzionare gli eventi

function nextImg () {
  var imgActive = $('.images img.active')
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
  }else {
    bulletActive.prev().addClass('active');
  }
}
});
