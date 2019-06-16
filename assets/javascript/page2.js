// looking at uber API for information on cars close to user
// matthew






// google maps API to pull up map to the specific div in html
// to pull up the information on where the house is in the zip code
// susan
var map;
var hotelData;

function initMap() {
   setTimeout(function(){ 
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: hotelData[0].hotel.latitude, lng:hotelData[0].hotel.longitude },
      zoom: 13
    });
  
  
  var marker =[]
  
  for(i=0;i<hotelData.length;i++) {
      pin=new google.maps.Marker({
          position:{
              lat: hotelData[i].hotel.latitude, lng: hotelData[i].hotel.longitude
          },
          
          title:hotelData[i].hotel.name,
           }),
           marker.push(pin);
  }
         console.log(marker);
  
         for(i=0;i<marker.length;i++){
            marker[i].setMap(map);
  
         }
   }
,11000);

    

function gethotel() {
  $(".loader").css("display","none");
  $("#main").css("display","inherit");
  $("#footer").css("display","inherit");
    hotelist=localStorage.getItem("hotel-list");
    
    hotelData=JSON.parse(hotelist).data;
    console.log("my data"+hotelData);
    listHotel();


}
 


  function listHotel() {
    console.log(hotelData);

    for (i = 0; i < hotelData.length; i++) {


      var card = $("<div class='card small' id='hotel-card'  >" +
        "<div class='card-image waves-effect waves-block waves-light'>" +
        "<img class='activator hotel1' src='./assets/image/hotel.jpg'/>" +
        "</div>" +
        "<div class='card-content'>" +
        "<span class='card-title activator grey-text text-darken-4 hotelName1' id='hotel" + i + "'> <h5" +
        " class=' right green-text' id='price"+i+"'>$$</h5></span>" +

        "<a class='btn-floating btn-medium orange darken-3 pulse wave-light'>" +
        "<i class='large material-icons'> directions_car</i>" +
        "</a>" +

        "</div>" +
        "<div class='card-reveal'>" +
        "<span class='card-title grey-text text-darken-4' id='hotel-r" + i + "'><i" +
        " class='material-icons right'>close</i></span>" +
        "<div class='hotelFeatures1 grey-text'>" +
        "<h5>Features: </h5>"+
        
        "<h6 class='black-text' id='description"+i+"'> Rating: </h6>"+
        "<h6 class='black-text' id='address"+i+"'> Address : </h6>"+
        "<h6 class='green-text' id='amenities"+i+"'> Amenities : </h6>"+
        "<h6 class='black-text' id='contact"+i+"'> Contact : </h6>"+
        

        "</div>" +

        "</div>" +
        "</div>");


      $("#append").append(card);


      //     // card.html(hotelCard);
      //     // card.attr("class","card");
      //     // $(".hotelName1").attr("id","hotel"+i);
      $("#hotel" + i).append(hotelData[i].hotel.name);
      $("#hotel-r" + i).append(hotelData[i].hotel.name);
    
      $("#description" + i).append(hotelData[i].hotel.rating);  
      
      $("#address" + i).append(hotelData[i].hotel.address.lines[0]); 
      $("#address" + i).append(", "+hotelData[i].hotel.address.cityName); 
      for(j=0;j<hotelData[i].hotel.amenities.length;j++){
      $("#amenities" + i).append(hotelData[i].hotel.amenities[j].toLowerCase().replace(/_/g," ")+", "); 
      }
      $("#contact" + i).append(hotelData[i].hotel.contact.phone);
      $("#price" + i).html(hotelData[i].offers[0].price.total+"$"); 
      console.log(hotelData[i].offers[0].price.total);

    }
  
}
setTimeout(gethotel,10000);
// gethotel();
// listHotel();

  }
  
  


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
