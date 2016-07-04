var functionalities = {
  showPhotos: function () {
    $(this).find('span').slideToggle();
  },
  showDescription: function () {
    $('.photos').on('mouseenter', 'li', this.showPhotos)
                .on('mouseleave', 'li', this.showPhotos);
  },
  inint: function() {

    var el = $("#tour");
    el.on("click", "button", function() {
      $.ajax({
        url: 'photos.html',
        data: {location: el.data('location')},
        success: function(response) {
          $('.photos').html(response).fadeIn();
        },
        error: function() {
          $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
        },
        timeout: 3000,
        beforeSend: function() {
          $('#tour').addClass('is-fetching');
        },
        complete: setTimeout(function(){
          $('#message').html('<p>AJAX request succeeded!</p>')}, 1000)

      });
    });
  }
};


$(document).ready(function() {

  functionalities.inint();
  functionalities.showPhotos();
  functionalities.showDescription();
});
