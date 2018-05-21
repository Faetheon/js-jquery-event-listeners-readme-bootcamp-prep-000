function getIt() {
  $('p').click(alert('Hey!'));
}

function frameIt() {
  $('img').on('load', function() { 
    $('img').addClass('tasty');
  })
}

function submitIt() {
  $('form').submit(alert("Your form is going to be submitted now."));
}

$(document).ready(function(){

// call functions here

});
