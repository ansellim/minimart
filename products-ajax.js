$(document).ready(function () {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "products.json");
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("AJAX call has been made");
      //document.getElementById("demo").innerHTML = this.responseText;

      var data = JSON.parse(this.responseText);

      //console.log(data[1]);

      var all_card_titles = document.getElementsByClassName("card-title");

      var all_card_texts = document.getElementsByClassName("card-text");

      for (i = 0; i < all_card_titles.length; i++) {
        all_card_titles[i].innerHTML = data[i].name;
      }

      for (i = 0; i < all_card_texts.length; i++) {
        all_card_texts[i].innerHTML = data[i].price;
      }

      var all_card_images = $(".product-listing").find("img");

      for (i = 0; i < all_card_images.length; i++) {
        all_card_images[i].src = data[i].photo;
      }

      /*$(".product-listing")
          .find("card-body")
          .each(function () {
            $(this).children("h5").first().html("123");
            $(this).children("p").first().html("567");
          }); */
    }
  };
});
