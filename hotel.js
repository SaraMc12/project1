//Autocomplete for search box (seems like a cool function)

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.autocomplete');
//   var instances = M.Autocomplete.init(elems, options);
// });










$("#submit-b").on("click", function() {
    text = $("#text-autocomplete-input").val();
    city = text.substring(0, 3);
    localStorage.clear();
    localStorage.setItem("city", city);


    window.open("page2.html");

})