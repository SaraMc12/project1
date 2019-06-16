//Autocomplete for search box (seems like a cool function)

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.autocomplete');
//   var instances = M.Autocomplete.init(elems, options);
// });










$("#submit-b").on("click",function(){
  
  
    hotel();
   
  })
  
  
  function hotel(){
    window.open("page2.html");
     city=$("#text-autocomplete-input").val();
     console.log(city);
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
            url: "https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=CHI&adults=1&radius=10&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=false&view=FULL",
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + token
            },
            success: function(response) {
               
                console.log(response);
                localStorage.clear();
                hotelist=JSON.stringify(response);
                localStorage.setItem("hotel-list", hotelist);
                
              
            }
        });
      }
  });
  }