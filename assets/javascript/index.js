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





document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
   M.Parallax.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.parallax').parallax();
});
Collapse




Message Input


Message Sara Mc