$(document).ready(function () {

    $("#go").on("click", start);

    function start(event) {

        // Prevent form from being submitted
        event.preventDefault();

        var token = $("#token").val().trim();

        $("#uber-details").show();

        // Start location is always 2145 Sheridan Road, Evanston
        // Future: Can we find out user's current location from phone/browser?
        var rideBeginLoc = {
            lat: "42.0578383",
            lon: "-87.6783453"
        };
    
        // TODO: This destination information has to come from Google Maps location that user selected
        // Right now it is Hoosier mama pies, Evanston
        var rideEndLoc = {
            lat: "42.0390043",
            lon: "-87.6920782"
        };
    
        // Request price estimate
        console.log("Requesting price estimate...");
        $.ajax({
            method: "GET",
            url: "https://sandbox-api.uber.com/v1.2/estimates/price",
            data: {
                start_latitude: rideBeginLoc.lat,
                start_longitude: rideBeginLoc.lon,
                end_latitude: rideEndLoc.lat,
                end_longitude: rideEndLoc.lon
            },
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(displayPriceEstimate);
    
        function displayPriceEstimate(response) {
            $("#prices").empty();
            var prices = response.prices;
            for (var i=0; i<prices.length; i++) {
                var price = prices[i];
                var message = price.localized_display_name + " - " + price.estimate;
                var li = $("<li>").text(message);
                $("#prices").append(li);
            }
                
            console.log(response);
        }

        $("#requestRideButton").on("click", requestRide);


        function requestRide() {
            console.log("Requesting ride...")
            $.ajax({
                method: "POST",
                url: "https://sandbox-api.uber.com/v1.2/requests/estimate",
                processData: false,
                data: JSON.stringify({
                    product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
                    start_latitude: rideBeginLoc.lat,
                    start_longitude: rideBeginLoc.lon,
                    end_latitude: rideEndLoc.lat,
                    end_longitude: rideEndLoc.lon 
                }),
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                console.log(response);
            })
        }
    }



});
