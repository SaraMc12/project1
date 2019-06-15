$(document).ready(function () {

    var token = "JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAG8AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAkAAAABwAAAAEAAAAEAAAAEk5KF333O_qlytkHZkRah5sAAAAp4O0z_-irUZBeHu-vbMkJIbIFVt5TfkeWjKPRFq6i1fn94BAyfrSOn1adgXdcqcixZ2kX58XG9cS0GRVv0GBL2tRkzYU2K0X8ivVfanf_f7a8GjeiBk2_GjBvW3zI4PCT0fzzx_4G1JcqvN0DAAAABuMQiEaochbe0Qv_yQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU";

    // Start location is always 2145 Sheridan Road, Evanston
    // Future: Can we find out user's current location from phone/browser?
    var rideBeginLoc = {
        lat: "42.0578383",
        lon: "-87.6783453"
    };

    // TODO: This destination information has to come from hotel location that user selected on page2
    // Right now it is Hoosier mama pies, Evanston
    var rideEndLoc = {
        lat: "42.0390043",
        lon: "-87.6920782"
    };

    // Ride information will be stored here
    var uberRideInfo = {};

    
    
    $("#go").on("click", start);

    function start(event) {

        // Prevent form from being submitted
        event.preventDefault();

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

            console.log(response);

            $("#prices").empty();
            var prices = response.prices;
            for (var i=0; i<prices.length; i++) {
                var price = prices[i];
                var message = price.localized_display_name + " - " + price.estimate;
                var btn = $("<button>").text(message).addClass("btn waves-effect waves-light").
                                attr("data-product-id", price.product_id);
                $("#prices").append(btn);
            }

            $("#prices button").on("click", getFare);
        }


        function getFare() {

            uberRideInfo.product_id = $(this).attr("data-product-id");

            console.log("Requesting fare...")
            $.ajax({
                method: "POST",
                url: "https://sandbox-api.uber.com/v1.2/requests/estimate",
                processData: false,
                data: JSON.stringify({
                    product_id: uberRideInfo.product_id,
                    start_latitude: rideBeginLoc.lat,
                    start_longitude: rideBeginLoc.lon,
                    end_latitude: rideEndLoc.lat,
                    end_longitude: rideEndLoc.lon 
                }),
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            }).then(displayFare)
        }


        function displayFare(response) {
            console.log(response);

            var pickup_estimate = response.pickup_estimate;
            var fare = response.fare;
            var price = fare.display;
            uberRideInfo.fare_id = fare.fare_id;

            var text = "Price: " + price + " Arriving in: " + pickup_estimate + " minutes";
            var h4 = $("<h4>").text(text);
            var btn = $("<button>").addClass("btn waves-effect waves-light").text("Confirm");
            $("#fare").append(h4, btn);
        }
    }



});