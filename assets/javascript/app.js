// var m = 
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 11
  });


var marker =[ new google.maps.Marker({
      position:{
          lat: 41.8781, lng: -87.6298
      },
      
      title:"house",
       }),
       new google.maps.Marker({
      position:{
          lat: 43.8781, lng: -87.5298
      },
      
      title:"house2",
       }),
       new google.maps.Marker({
      position:{
          lat: 40.8781, lng: -87.4298
          
      },
      
      title:"house3",
       })];
       console.log(marker);

       for(i=0;i<marker.length;i++){
          marker[i].setMap(map);

       }

}

function hotel(){

  $.ajax({
    url: 'https://test.api.amadeus.com/v1/security/oauth2/token',//Access URL goes here
    method: 'POST',
    dataType: 'text',
    data: {
        scope:"read",
        client_id: "mX4zCh7q8HuQGL0Nns3492LxojXRNMWL",//client id
        client_secret: "nJCI4E4HNACd0yvL",//client secret id
        grant_type: 'client_credentials'
    },
    headers: {
        'Accept': 'application/json, application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    complete: function (data) {
         
        /* YOUR WORK STARTS HERE! */
        console.log(data);
        parsed= JSON.parse(data.responseText);
        token=parsed.access_token;
        console.log(token);
        $.ajax({
          url: "https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=CHI",
          method: "GET",
          headers: {
              "Authorization" : "Bearer " + token
          },
          success: function(response) {
             
              console.log(response);
          }
      });
    }
});

}

hotel();
