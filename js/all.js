$('#HeaderBtnBars').click(function(){
  $('#HeaderNav').slideDown(1000);
  $(this).hide();
})


$('#HeaderBtnXmark').click(function(){
  $('#HeaderNav').slideUp(1000);
  $('#HeaderBtnBars').show();
});