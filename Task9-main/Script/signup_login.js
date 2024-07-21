$(document).ready(function(){

    var emailError = $('#emailError');

    // Regular expression to enforce the email format
    var emailRegex = /[a-z0-9._]+@[a-z]+\.[a-z]{2,4}$/;
    $('#email').on('input', function () {
        var email = $(this).val();
  
  
        if (!emailRegex.test(email)) {
           emailError.text("Please enter a valid email address.");
        } else {
           emailError.text(""); // Clear any previous error message
        }
     });

});


