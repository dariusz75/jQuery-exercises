$(document).ready(function(){
  $('.vacation').on('keyup', '.quantity', function() {
     
  var price = +$(this).closest('.vacation').data('price');
  var quantity = +$(this).closest('.quantity').val();
  var totalPrice = (price * quantity).toFixed(2);
  $(this).closest('.wrapper').find('.total').text(totalPrice);
   
   });
});