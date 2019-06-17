$(document).ready(function () {

    var token = "JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAG8AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAkAAAABwAAAAEAAAAEAAAAEk5KF333O_qlytkHZkRah5sAAAAp4O0z_-irUZBeHu-vbMkJIbIFVt5TfkeWjKPRFq6i1fn94BAyfrSOn1adgXdcqcixZ2kX58XG9cS0GRVv0GBL2tRkzYU2K0X8ivVfanf_f7a8GjeiBk2_GjBvW3zI4PCT0fzzx_4G1JcqvN0DAAAABuMQiEaochbe0Qv_yQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU";

    // TODO Add more cities
    var allBeginLocations = {
        CHI: {
            lat: "41.9741625",
            lon: "-87.9095101"
        },
        NYC: {
            lat: "40.6413111",
            lon: "-73.7803278"
        },
        LAX: {
            lat: "33.9415889",
            lon: "-118.4107187"
        },
        SEA: {
            lat: "47.6129432",
            lon: "-122.482148"
        },
        BOS: {
            lat: "42.3142647",
            lon: "-71.1103683"
        },
        MIA: {
            lat: "25.7823907",
            lon: "-80.2994989"
        }
    };

    // The begin location for the uber ride is based on the city selected by user
    var city = localStorage.getItem("city") || "CHI";
    var rideBeginLoc = allBeginLocations[city];

    // This destination information comes from hotel location that user selected on page2
    var hotel_lat = localStorage.getItem("latitude") || "42.0390043";
    var hotel_lon = localStorage.getItem("longitude") || "-87.6920782";
    var rideEndLoc = {
        lat: hotel_lat,
        lon: hotel_lon
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

            console.log("Requesting fare...");
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

            var text = "Price: " + price + ". Estimated Arrival: " + pickup_estimate + " minutes";
            var h4 = $("<h4>").text(text);

            var btn = $("<button>").attr("id", "confirmBtn").addClass("btn waves-effect waves-light cyan lighten-1").text("Confirm");
            var icon = $("<i>").addClass("material-icons left").text("local_taxi");
            btn.append(icon);
            
            var cancel = $("<button>").attr("id", "cancelBtn").addClass("btn waves-effect waves-light cyan lighten-1").text("Cancel")
            
            $("#fare").append(h4, btn, cancel);

            $("#confirmBtn").on("click", requestRide);
            $("#cancelBtn").on("click", cancelRide);
        }


        function requestRide() {
            console.log("Requesting ride...");

            $.ajax({
                method: "POST",
                url: "https://sandbox-api.uber.com/v1.2/requests",
                processData: false,
                data: JSON.stringify({
                    product_id: uberRideInfo.product_id,
                    fare_id: uberRideInfo.fare_id,
                    start_latitude: rideBeginLoc.lat,
                    start_longitude: rideBeginLoc.lon,
                    end_latitude: rideEndLoc.lat,
                    end_longitude: rideEndLoc.lon 
                }),
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            }).then(done);

        }


        function done(response) {
            console.log(response);

            uberRideInfo.request_id = response.request_id;
            $("#reqConfirmation").show();
        }


        function cancelRide() {
            $.ajax({
                method: "DELETE",
                url: "https://sandbox-api.uber.com/v1.2/requests/current",
                headers: {
                    "Authorization": "Bearer " + token
                }
            });
        }
    }



});