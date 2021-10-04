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

//flip card animation
$(".card").flip();

//copy text to clipboard
const clipboard = new ClipboardJS('#email', {
        text: function () {
          return $('#email').text();
        },
      });

      clipboard.on('success', function (e) {
				alert(`Email has been copied to clipboard`)
        console.log(e);
      });

      clipboard.on('error', function (e) {
        console.log(e);
      });



})
