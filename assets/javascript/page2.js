// looking at uber API for information on cars close to user
// matthew






// google maps API to pull up map to the specific div in html
// to pull up the information on where the house is in the zip code
// susan
<<<<<<< HEAD
var map;
var hotelData;

function initMap() {
   setTimeout(function(){ 
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: hotelData[0].hotel.latitude, lng:hotelData[0].hotel.longitude },
    zoom: 13
=======
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

>>>>>>> 2e0155bf09cf4eb8323734af8e52dc0753f0daf8
  });

});
  var map;
  var hotelData;

  function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: hotelData[0].hotel.latitude,
        lng: hotelData[0].hotel.longitude
      },
      zoom: 13
    });


    var marker = []

    for (i = 0; i < hotelData.length; i++) {
      pin = new google.maps.Marker({
          position: {
            lat: hotelData[i].hotel.latitude,
            lng: hotelData[i].hotel.longitude
          },

<<<<<<< HEAD
}
,11000);}
=======
          title: hotelData[i].hotel.name,
        }),
        marker.push(pin);
    }
    console.log(marker);

    for (i = 0; i < marker.length; i++) {
      marker[i].setMap(map);
>>>>>>> 2e0155bf09cf4eb8323734af8e52dc0753f0daf8

    }

<<<<<<< HEAD
function gethotel() {
  $(".loader").css("display","none");
  $("#main").css("display","inherit");
  $("#footer").css("display","inherit");
    hotelist=localStorage.getItem("hotel-list");
    
    hotelData=JSON.parse(hotelist).data;
    console.log("my data"+hotelData);
    listHotel();
=======
  }
>>>>>>> 2e0155bf09cf4eb8323734af8e52dc0753f0daf8



  function gethotel() {
    hotelist = localStorage.getItem("hotel-list");

    hotelData = JSON.parse(hotelist).data;
    console.log("my data" + hotelData);

  }


  function listHotel() {
    console.log(hotelData);

    for (i = 0; i < hotelData.length; i++) {


      var card = $("<div class='card small' id='hotel-card'  >" +
        "<div class='card-image waves-effect waves-block waves-light'>" +
        "<img class='activator hotel1' src='./assets/image/hotel.jpg'/>" +
        "</div>" +
        "<div class='card-content'>" +
        "<span class='card-title activator grey-text text-darken-4 hotelName1' id='hotel" + i + "'>Hotel Name <i " +
        " class='material-icons right hotelPrice1'>$$</i></span>" +

        "<a class='btn-floating btn-medium orange darken-3 pulse wave-light'>" +
        "<i class='large material-icons'> directions_car</i>" +
        "</a>" +

        "</div>" +
        "<div class='card-reveal'>" +
        "<span class='card-title grey-text text-darken-4' id='hotel" + i + "'>Hotel Name<i" +
        " class='material-icons right'>close</i></span>" +
        "<p class='hotelFeatures1 grey-text'>Features:" +
        "Everything that is great about the hotel" +
        "</p>" +

        "</div>" +
        "</div>");


      $("#append").append(card);


      //     // card.html(hotelCard);
      //     // card.attr("class","card");
      //     // $(".hotelName1").attr("id","hotel"+i);
      $("#hotel" + i).html(hotelData[i].hotel.name);



    }
<<<<<<< HEAD
  
}
setTimeout(gethotel,10000);
// gethotel();
// listHotel();
=======
>>>>>>> 2e0155bf09cf4eb8323734af8e52dc0753f0daf8

  }
  gethotel();
  listHotel();


  // zillow API for pulling up information on house
  // looking at how to look up ZIP and available Open Houses
  // also looking at special features in home
  // hani


  // Jimi

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
  });

  $(document).ready(function () {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
