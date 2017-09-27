// Initialize Firebase
var config = {
  apiKey: "AIzaSyD7Tl5ZzIxV33LqQqvRyOvcDFKtc9Vselk",
  authDomain: "project1-c6321.firebaseapp.com",
  databaseURL: "https://project1-c6321.firebaseio.com",
  projectId: "project1-c6321",
  storageBucket: "project1-c6321.appspot.com",
  messagingSenderId: "1039060630480"
};

firebase.initializeApp(config);

var database = firebase.database();



$("#sendMessageButton").on('click', function () {

  // Grabs user input
  var name = $("#name").val().trim();
  var message = $("#message").val().trim();
  var email = $("#email").val().trim();
  var phone = $("#phone").val().trim();


  // Creates local temporary object for holding user name and comments
  var newUsers = {
    name: name,
    comment: message,
    email: email,
    phone: phone,

  };

  // Uploads user data to the database
  database.ref('/contactForm/user').push(newUsers);

  // Console logging for tests
  console.log(newUsers);


  // Clears all of the text-boxes
  $("#name").val("");
  $("#message").val("");
  $("#email").val("");
  $("#phone").val("");


});






// Contact Me form from template 

//$(function() {

// $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//   preventSubmit: true,
//   submitError: function($form, event, errors) {
//     // additional error messages or events
//   },
//   submitSuccess: function($form, event) {
//     event.preventDefault(); // prevent default submit behaviour
//     // get values from FORM
//     var name = $("input#name").val();
//     var email = $("input#email").val();
//     var phone = $("input#phone").val();
//     var message = $("textarea#message").val();
//     var firstName = name; // For Success/Failure Message
//     // Check for white space in name for Success/Fail message
//     if (firstName.indexOf(' ') >= 0) {
//       firstName = name.split(' ').slice(0, -1).join(' ');
//     }
//     $this = $("#sendMessageButton");
//     $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
// $.ajax({
//   url: "././mail/contact_me.php",
//   type: "POST",
//   data: {
//     name: name,
//     message: message
//   },
//   cache: false,
//   success: function() {
//     // Success message
//     $('#success').html("<div class='alert alert-success'>");
//     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//       .append("</button>");
//     $('#success > .alert-success')
//       .append("<strong>Your message has been sent. </strong>");
//     $('#success > .alert-success')
//       .append('</div>');
//     //clear all fields
//     $('#contactForm').trigger("reset");
//   },
//   error: function() {
//     // Fail message
//     $('#success').html("<div class='alert alert-danger'>");
//     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//       .append("</button>");
//     $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
//     $('#success > .alert-danger').append('</div>');
//     //clear all fields
//     $('#contactForm').trigger("reset");
//   },
//   complete: function() {
//     setTimeout(function() {
//       $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
//     }, 1000);
//   }
// });
//     },
//     filter: function() {
//       return $(this).is(":visible");
//     },
//   });

//   $("a[data-toggle=\"tab\"]").click(function(e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// //});

// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//   $('#success').html('');
// });