$(document).ready(function () {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "https://ansellim.github.io/minimart/products.json");
  ourRequest.onload = function () {
    // console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);

    for (i = 0; (i = ourData.length); i++) {
      console.log("Item no. " + String(i + 1) + ": " + ourData[i].name);
    }
  };
  ourRequest.send();
});
