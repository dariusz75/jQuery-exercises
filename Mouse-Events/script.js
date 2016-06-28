$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });

  // create showPhotos() function

  $('.photos').on('mouseenter', 'li', function() {
    $(this).find('span').slideToggle();
  });
  $('.photos').on('mouseleave', 'li', function() {
    $(this).find('span').slideToggle();
  });
 
});
