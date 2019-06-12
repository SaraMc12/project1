
 document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.sidenav');
   M.Sidenav.init(elems, options);
});
 
 $(document).ready(function(){
  $('.sidenav').sidenav();
});

//document.addEventListener('DOMContentLoaded', function () {
  //var elems = document.querySelectorAll('.slider');
  //var instances = M.Slider.init(elems, options);
//});

// Or with jQuery

$(document).ready(function () {
  $('.slider').slider();
});

//Autocomplete for search box (seems like a cool function)

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.autocomplete');
//   var instances = M.Autocomplete.init(elems, options);
// });

$(document).ready(function () {
  $('input.autocomplete').autocomplete({
    data: {
      "O'hare (ORD)": null,
      "Regan (DCW)": null,
      "Los Angeles (LAX": null,
      "New York (JFK)": null,
      "Seattle-Tacoma (SEA)": null,
      "Boston (BOS)": null,
      "Miami (MIA)": null,
      "Midway (MID)": null,
      "Denver (DEN)": null,
      "Dallas-Ft.Worth (DFW)": null,
      "Key West (EYW)": null,
      "New Orleans(MSY)": null,


    },
  });
});

//Scrollspy function
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, options);
});


$(document).ready(function () {
  $('.pushpin').pushpin();
});


$("#submit-b").on("click",function(){
  hotel();
})


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