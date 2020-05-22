function searchLocation(cityInput) {
  var key = "&key=AIzaSyAtPSsLK6vd2cPiHSxryHM3OK98Kmenak4";
  var superMarketURL =
    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=supermarkets+near+" +
    cityInput +
    key;

  $.ajax({
    url: superMarketURL,
    method: "GET"
  }).then(function(response) {
    for (var i = 0; i < 5; i++) {
      console.log(response);
      // Creating a div to hold the supermarket results
      var supermarketsDiv = $("<div class='supermarkets'>");

      // Storing the supermarket name
      var name = response.results[i].name;
      console.log(response.results[i].name);

      // Creating an element to have name displayed
      var pName = $("<h2>").text("Name: " + name);

      // Appending the name dataset to contianer div
      supermarketsDiv.append(pName);

      // Storing the supermarket opening hours
      var openHours = response.results[i].opening_hours;
      console.log(response.results[i].opening_hours);

      // Creating an element to have opening hours displayed
      var pOpenHours = $("<h3>").text("Open: " + openHours);
      console.log(pOpenHours);

      // Appending the opening hours dataset to contianer div
      supermarketsDiv.append(pOpenHours);

      // Storing the supermarket opening hours
      var addressInfo = response.results[i].formatted_address;
      console.log(response.results[i].formatted_address);

      // Creating an element to have opening hours displayed
      var pAddressInfo = $("<h3>").text("Address: " + addressInfo);
      console.log(response);

      // Appending the opening hours dataset to contianer div
      supermarketsDiv.append(pAddressInfo);

      $("#results-view").prepend(supermarketsDiv);
    }
  });
}

$(document).ready(function() {
  $("#SearchBtn").on("click", function(event) {
    event.preventDefault();
    $(".supermarkets").remove();
    console.log(event);
    var cityInput = $("#Search-City")
      .val()
      .trim();
    searchLocation(cityInput);
    $("#card-body1").empty();
  });
});
