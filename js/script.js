var card_body = document.querySelectorAll(".card-body");
var card = document.querySelectorAll(".card");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseover", function () {
    console.log(card_body[i]);
    card_body[i].style.visibility = "visible";
  });
  card[i].addEventListener("mouseleave", function () {
    console.log(card_body[i]);
    card_body[i].style.visibility = "hidden";
  });
}
