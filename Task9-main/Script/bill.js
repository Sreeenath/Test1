$(function () {
    $("#shipaddress").click(function () {
        if ($(this).is(":checked")) {
            $("#dshipaddress").show();
           
        } else {
            $("#dshipaddress").hide();
          
        }
    });
});

$(document).ready(function(){

    var emailError = $('#emailError');
    
   var phnoError = $('#phoneError');
   var phnoRegex = /^\d{10}$/;

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

     $('#phone').on('input', function () {
        var phnumber = $(this).val();
  
  
        if (!phnoRegex.test(phnumber)) {
           phnoError.text("Please enter a valid Phone number.");
        } else {
           phnoError.text(""); // Clear any previous error message
        }
     });




     $('#order').click(function () {
      alert("Order Placed Successfully")
   
   
   
   });

});



