$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });

  function showPhotos() {
    $(this).find('span').slideToggle();
  }

  $('.photos').on('mouseenter', 'li', showPhotos);
  $('.photos').on('mouseleave', 'li', showPhotos);
});

 
