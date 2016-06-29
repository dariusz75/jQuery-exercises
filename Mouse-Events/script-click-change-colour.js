$(document).ready(function() {
  
  $('.tour').on('click', '.see-photos', function(event) {
  	event.preventDefault();
  	$(this).closest('.tour').find('.photos').fadeToggle();
  });

  $('.tour').on('click', '.change', function () {
  	$(this).closest('.tour').toggleClass('change-colour');
  });

});
