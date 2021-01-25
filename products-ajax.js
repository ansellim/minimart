$(document).ready(function () {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "products.txt");
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
});
