function getIt() {
  $('p').click(alert('Hey!'));
}

function frameIt() {
  $('img').on('load', function() { 
    $('img').addClass('tasty');
  })
}

$(document).ready(function(){

// call functions here

});
