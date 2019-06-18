
$(document).ready(function () {
    var firebaseConfig = {
      apiKey: "AIzaSyC_rmr4-TDCX-0-e3vgMG_5m93IUlgiJRA",
      authDomain: "srslyproject.firebaseapp.com",
      databaseURL: "https://srslyproject.firebaseio.com",
      projectId: "srslyproject",
      storageBucket: "srslyproject.appspot.com",
      messagingSenderId: "696599422635",
      appId: "1:696599422635:web:4faea30ef8777d7b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    $("#add-user").on("click", function (event) {
      event.preventDefault();
      var userName = $("#fist_name").val().trim();
      var password = $("#password").val().trim();
      var email = $("#email").val().trim();
      var newUser = {
        name: userName,
        password: password,
        email: email,
      };
     
      database.ref().push(newUser);
      // Clears all of the text-boxes
      $("#fist_name").val("");
      $("#password").val("");
      $("#email").val("");
  
    });
  });