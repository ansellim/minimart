var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://ansellim.github.io/minimart/products.json");
ourRequest.onload = function () {
  console.log(ourRequest.responseText);
  var ourData = ourRequest.responseText;
  console.log("First product: " + ourData[0].name);
};
ourRequest.send();
