// looking at uber API for information on cars close to user
// matthew






// google maps API to pull up map to the specific div in html
// to pull up the information on where the house is in the zip code
// susan
var map;
var hotelData;

function initMap() {
    
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298},
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



function gethotel() {
    hotelist=localStorage.getItem("hotel-list");
    
    hotelData=JSON.parse(hotelist).data;
    

}


function listHotel(){
    console.log(hotelData);
    for(i=0;i<hotelData.length;i++){
    card=$("<div>");
    
    hotelCard=$("#hotel-card").html();
    card.html(hotelCard);
    card.attr("class","card");
    $(".hotelName1").attr("id","hotel"+i);
    $("#hotel"+i).html(hotelData[i].hotel.name);
    $("#append").append(card);
   
    }
}
gethotel();
listHotel();


// zillow API for pulling up information on house
// looking at how to look up ZIP and available Open Houses
// also looking at special features in home
// hani


// Jimi
