function getIt() {
  $('p').click(alert('Hey!'));
}

function frameIt() {
  $('.tasty').on('load', function() { 
    $('.tasty').css({borderColor: "red"});
  })
}

$(document).ready(function(){

// call functions here

});
