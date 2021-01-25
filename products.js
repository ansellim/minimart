var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://ansellim.github.io/minimart/products.json");
ourRequest.onload = function () {
  console.log(ourRequest.responseText);
};
ourRequest.send();
