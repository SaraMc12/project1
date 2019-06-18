// looking at uber API for information on cars close to user
// matthew






// google maps API to pull up map to the specific div in html
// to pull up the information on where the house is in the zip code
// susan
var map;
var hotelData;
var myposition;

function initMap() {
    hotel();

}



function gethotel() {
    $(".loader").css("display", "none");
    $(".load-text").css("display", "none");
    $("#main").css("display", "inherit");
    $("#footer").css("display", "inherit");



    listHotel();


}


function listHotel() {
    console.log(hotelData);

    for (i = 0; i < hotelData.length; i++) {


        var card = $("<div class='card medium' id='hotel-card'  >" +
            "<div class='card-image waves-effect waves-block waves-light'>" +
            "<img class='activator hotel1' src='./assets/hotel-images/hotel" + i + ".jpg'/>" +
            "</div>" +
            "<div class='card-content'>" +
            "<span class='card-title activator grey-text text-darken-4 hotelName1' id='hotel" + i + "'> <h5" +
            " class=' right green-text' id='price" + i + "'>$$</h5></span>" +

            "<a class='btn-floating btn-medium orange darken-3 pulse wave-light car'  data-hotel='" + i + "'>" +
            "<i class='large material-icons'> directions_car</i>" +
            "</a>" +

            "</div>" +
            "<div class='card-reveal'>" +
            "<span class='card-title grey-text text-darken-4' id='hotel-r" + i + "'><i" +
            " class='material-icons right'>close</i></span>" +
            "<div class='hotelFeatures1 grey-text'>" +
            "<h5>Features: </h5>" +

            "<h6 class='black-text' id='description" + i + "'> Rating: </h6>" +
            "<h6 class='black-text' id='address" + i + "'> Address : </h6>" +
            "<h6 class='green-text' id='amenities" + i + "'> Amenities : </h6>" +
            "<h6 class='black-text' id='contact" + i + "'> Contact : </h6>" +


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
        $("#address" + i).append(", " + hotelData[i].hotel.address.cityName);
        try {
            for (j = 0; j < hotelData[i].hotel.amenities.length; j++) {
                $("#amenities" + i).append(hotelData[i].hotel.amenities[j].toLowerCase().replace(/_/g, " ") + ", ");
            }
        }
        catch(e){
            $("#amenities" + i).append("not available");
        }

        

         try{
        $("#contact" + i).append(hotelData[i].hotel.contact.phone);}
        catch(e){
            $("#contact" + i).append("not available")
        }

        $("#price" + i).html(hotelData[i].offers[0].price.total + "$");

        console.log(hotelData[i].offers[0].price.total);

    }


    $(".car").on("click", function() {
        index = $(this).attr("data-hotel");
        console.log(index);
        console.log(hotelData);
        num = parseInt(index, 10);
        lat = hotelData[num].hotel.latitude;
        lon = hotelData[num].hotel.longitude;
        localStorage.setItem("latitude", lat);
        localStorage.setItem("longitude", lon);

        window.open("page3.html");


    })





}



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'right'
    });
});

$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
});
$('.sidenav').sidenav();

function hotel() {
    city = localStorage.getItem("city");

    console.log(city);
    $.ajax({
        url: 'https://test.api.amadeus.com/v1/security/oauth2/token', //Access URL goes here
        method: 'POST',
        dataType: 'text',
        data: {
            scope: "read",
            client_id: "mX4zCh7q8HuQGL0Nns3492LxojXRNMWL", //client id
            client_secret: "nJCI4E4HNACd0yvL", //client secret id
            grant_type: 'client_credentials'
        },
        headers: {
            'Accept': 'application/json, application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        complete: function(data) {

            /* YOUR WORK STARTS HERE! */
            console.log(data);
            parsed = JSON.parse(data.responseText);
            token = parsed.access_token;
            console.log(token);
            $.ajax({
                url: "https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=" + city + "&adults=1&radius=10&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=false&view=FULL",
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                },
                success: function(response) {
                    hotelData = response.data;

                    console.log(hotelData);


                    x= navigator.geolocation;
                    x.getCurrentPosition(success);
                    function success(data){
                        myposition=data.coords
                        map = new google.maps.Map(document.getElementById('map'), {
                            center: { lat: hotelData[0].hotel.latitude, lng: hotelData[0].hotel.longitude },
                            zoom: 11
                        });
                        
                        console.log(myposition.longitude);
                        localStorage.setItem("my-lat",myposition.latitude);
                        localStorage.setItem("my-long",myposition.longitude);
                        mypos = new google.maps.Marker({
                            position: {
                                lat:myposition.latitude,
                                lng:myposition.longitude,
                                
                            },
    
                            map:map,
                            
    
                            title: "my position",
                            
                            
                            
                        });
                        mypos.setMap(map);
                        var marker = [];

                        for (i = 0; i < hotelData.length; i++) {
                            pin = new google.maps.Marker({
                                    position: {
                                        lat: hotelData[i].hotel.latitude,
                                        lng: hotelData[i].hotel.longitude
                                    },
    
                                    title: hotelData[i].hotel.name,
                                    icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
                                })
                                marker.push(pin);
                        }
                        console.log(marker);
    
                        for (i = 0; i < marker.length; i++) {
                            marker[i].setMap(map);
    
                        }
                        gethotel();

                    }

                   


                   

                   
                    
                    


                   
                    

                   

                }
            });
        }
    });
}
