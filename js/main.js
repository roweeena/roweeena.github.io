$(document).ready(function() {


	let stickyNavTop = $('#nav').offset().top;

  const stickyNav = function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop >= stickyNavTop){
      $('#nav').addClass('sticky');
    } else {
      $('#nav').removeClass('sticky');
    }
  };
stickyNav();

$(window).scroll(function(){
  stickyNav();
});


$(".card").flip();

})
