
    <script>
    console.log("Running script");
    function initMap() {
      var myLatLng;
      var geocoder = new google.maps.Geocoder();

      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        myLatLng.lat = position.coords.latitude;
        myLatLng.lng = position.coords.longitude;
        

        geocoder.geocode({ location: myLatLng }, function (results, status) {
          console.log(status);
          if (status === "OK") {
            if (results[0]) {
              console.log(results[0]);
              document.querySelector("#start").value =
                results[0].formatted_address;
            } else {
              window.alert("No results found");
            }
          } else {
            window.alert("Geocoder failed due to: " + status);
          }
        });
      });

      if (myLatLng == undefined) {
        myLatLng = { lat: 1.3115957122081283, lng: 103.77520417009457 };
      }

      var directionsDisplay = new google.maps.DirectionsRenderer();
      var directionsService = new google.maps.DirectionsService();
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
      });
      directionsDisplay.setMap(map);
      directionsDisplay.setPanel(document.getElementById("right-panel"));

      var control = document.getElementById("floating-panel");
      control.style.display = "block";
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

      var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
      };
      document
        .getElementById("btn_getDirections")
        .addEventListener("click", onChangeHandler);
    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var start = document.getElementById("start").value;
      var end = document.getElementById("end").value;
      directionsService.route(
        {
          origin: start,
          destination: end,
          travelMode: "DRIVING",
        },
        function (response, status) {
          if (status === "OK") {
            directionsDisplay.setDirections(response);
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    }
  </script>