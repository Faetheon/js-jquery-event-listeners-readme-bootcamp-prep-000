function getIt() {
  $('p').click(alert('Hey!'));
}

function frameIt() {
  $('.tasty').on('load', function() { 
    $('.tasty').css({"border-color"});
  })
}

$(document).ready(function(){

// call functions here

});
