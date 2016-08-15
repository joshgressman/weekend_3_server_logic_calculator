$(document).ready(function() {
getAnswer ();
 $('#calc-form').on('submit', function () {
  event.preventDefault();
    location.reload();
  var numbers = {};
  // console.log("numbers",numbers);
//gets data from form for numbers object convers num string to num
//type is defined by radio buttons
  $.each($('#calc-form').serializeArray(), function(i, field){
    numbers.x = parseInt(numbers.x);
    numbers.y = parseInt(numbers.y);
    numbers[field.name] = field.value;
    //can add a conditional or switch to assign the type values to a button click

    // console.log("value",field.value);
    // console.log("numbers info", numbers);

   $('#calc-form')[0].reset();
  })
//on click this is taking the information from the form and POSTing it to apps.js
  $.ajax({
    type: 'POST',
    url:'/numbers',
    data: numbers,
    success: function(response){
      console.log('POST /numbers works!');
    },
    error: function(response){
      console.log('Attempted POST /numbers, did not work');
        // alert('Didnt Work!!!');
      }

  });

//end of click event
});


//get funtion will go here, append results to the dom
function getAnswer () {
  $.ajax({
    type: 'GET',
    url:'/numbers',
    success: function (answerOb){
        console.log('GET /numbers works!');
      $('#ans').append('<h3>Results:<span id="out">'+ answerOb.answer +'</span><h3>');
    },
error: function () {
  console.log('GET /numbers did not work');
},
});
  }
  $('#clear').on('click', function () {
    $('#out').text('0');
  });

//end of doc ready
});
