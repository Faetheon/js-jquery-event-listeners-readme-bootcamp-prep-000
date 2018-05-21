function getIt() {
  $('p').click(alert('Hey!'));
}

function frameIt() {
  $('.tasty').on('load', function() { 
    $('.tasty').css({borderColor: "red", borderWidth: "5px solid"});
  })
}

$(document).ready(function(){

// call functions here

});
