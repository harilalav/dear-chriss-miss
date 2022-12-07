var captionLength = 0;
var caption = '';


$(document).ready(function() {
    $("#my_audio").get(0).play();
    setInterval ('cursorAnimation()', 1000);
    captionEl = $('#content');
    testTypingEffect();
    $("#intro").delay(2000).fadeIn("slow");
});

function testTypingEffect() {
    caption = "Dear Miss Chriss,<br /> Thank you for assisting us in gaining self-assurance.<br /> We had your full support and flexibility to help us become capable. <br /> It's impossible to express the confidence boost you gave us by constantly taking us into account throughout events. <br /> The encouraging remarks provided us the courage and strength to pursue the life we had always wanted..<br /> We will never forget our time in your class. you helped us to think bigger, understand the basics, and you are one of the people who has led us to where we are today. <br /> We are so thankful for having a teacher like you, we wish you the best of luck on your next endeavors.<br /> Hope to see you at some other point in life.<br /> Travel Safe :)";
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 80);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}