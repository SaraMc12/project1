$(document).ready(function() {




    var firebaseConfig = {
        apiKey: "AIzaSyAL-HIiheg0Sn5e0y33q3xXOKeAgvsQsy0",
        authDomain: "emailsubscribe-59faf.firebaseapp.com",
        databaseURL: "https://emailsubscribe-59faf.firebaseio.com",
        projectId: "emailsubscribe-59faf",
        storageBucket: "emailsubscribe-59faf.appspot.com",
        messagingSenderId: "938506569892",
        appId: "1:938506569892:web:3f8cc4b5e143b89a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



    var database = firebase.database();

    $("#subscribe").on("click", function(event) {
        event.preventDefault();

        //User Information
        var name = $("#full-name").val().trim();
        var email = $("#email").val().trim();
        console.log(name)

        //Creates local data

        var newEmailAdd = {
            name: name,
            email: email,
        };

        //uploads employee data to the database

        database.ref().push(newEmailAdd);

        console.log(name.name);
        console.log(email.email);

        // alert("Email Added");

        // Clears all of the text-boxes
        $("#full-name").val("");
        $("#email").val("");

    });

    // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());

        // Store everything into a variable.
        var name = childSnapshot.val().name;
        var email = childSnapshot.val().email;

        // alert("Thank you for subscribing");

    });



    // var delay = 300; // milliseconds
    // var cookie_expire = 0; // days

    // var cookie = localStorage.getItem("list-builder");
    // if (cookie == undefined || cookie == null) {
    //     cookie = 0;
    // }

    // if (((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
    //     $("#list-builder").delay(delay).fadeIn("fast", () => {
    //         $("#popup-box").fadeIn("fast", () => {});
    //     });

})