
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

	//typing effect

	let typeText = $('#text'); //querySelector
	const textToBeTyped = "But you can call me Ro";
	const sentenceArray = ["But you can call me Ro", "I'm a junior software engineer", "Keen to grow and learn"];
	let index = 0, isAdding = true, textToBeTypedIndex = 0;

	const playAnim = function() {
	setTimeout(function () {
		const sentence = sentenceArray[textToBeTypedIndex].slice(0, index);
		typeText.text(sentence)
		if (isAdding) {
			// adding text
			if (index > sentenceArray[textToBeTypedIndex].length) {
				// no more text to add
				isAdding = false
				//break: wait 2s before playing again
				setTimeout(function () {
					playAnim()
				}, 2000)
				return
			} else {
				// increment index by 1
				index++
			}
		} else {
			// removing text
			if (index === 0) {
				// no more text to remove
				isAdding = true
				//switch to next text in text array
				textToBeTypedIndex = (textToBeTypedIndex + 1) % sentenceArray.length
			} else {
				// decrement index by 1
				index--
			}
		}
		// call itself
		playAnim()
	}, isAdding ? 120 : 60)
	}
	// start animation
	playAnim()


	//end document ready
})
