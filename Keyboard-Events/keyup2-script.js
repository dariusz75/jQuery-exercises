$(document).ready(function(){
  $('.vacation').on('keyup', '.quantity', function() {
  
  var quantity = +$(this).closest('.quantity').val();   
  var singlePrice = +$(this).closest('.vacation').data('price');
  var totalPrice = (singlePrice * quantity).toFixed(2);
  var totalPriceWithVat = (totalPrice * 1.22).toFixed(2);
  
  $('.price').text(totalPrice);
  $('.quantity-given').text(quantity);
  $('.total').text(totalPriceWithVat);
   
   });
});