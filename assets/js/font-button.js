$(document).ready(function() {
  $('#increase, #decrease').on('click', function() { // click to increase or decrease
    var btn = $(this),
      fontSize = parseInt(window.getComputedStyle(document.body, null).fontSize, 0); // parse the body font size as a number
    if (btn[0].id === "increase") { // detect the button being clicked
      fontSize++; // increase the base font size
    } else {
      fontSize--; // or decrease
    }
    document.body.style.fontSize = fontSize + 'px'; // set the body font size to the new value
  });
});
