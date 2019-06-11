document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });
  
  // Or with jQuery
  
  $(document).ready(function(){
    $('.slider').slider();
  });

  //Autocomplete for search box (seems like a cool function)

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });

  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Roscoe Villege": null,
        "Edgwater": null,
        "Wicker Park": null,
        "Gold Coast": null,
        "Streeterville": null,
        "Beverly": null,
        "Bucktown":null,
        "Andersonville": null,
        "Boystown": null,
        "Wrigylville": null,
        "Bridgport": null,
        "Lincoln Park": null,
        
        
      },
    });
  });

  //Scrollspy function
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
  });


  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
        