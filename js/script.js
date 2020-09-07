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

$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $(".back-to-top").addClass("visible");
  } else {
    $(".back-to-top").removeClass("visible");
  }
});
var x = 0;
$("#ham").on("click", function () {
  x += 1;
  $(".nav-full-item-links").toggleClass("visible");
  if (x % 2 != 0) {
    $(".nav-full-item").addClass("animation");
    $(".nav-full-item").removeClass("down");
  } else {
    $(".nav-full-item").removeClass("animation");
    $(".nav-full-item").addClass("down");
  }
});

$(".nav-full-item-links a").on("click", function () {
  $(".nav-full-item-links").removeClass("visible");
  $("#ham").toggleClass("active");
});

$("#work-tab,#works-tab,#about-tab,#abouts-tab").on("click", function () {
  $("body").removeClass("bg-red");
  $(".nav-full-item-links").removeClass("bg-red");
  $(".nav-social-media a,.nav-link,.navbrand").removeClass("color-white");
});

$("#contact-tab,#contacts-tab").on("click", function () {
  $("body").addClass("bg-red");
  $(".nav-full-item-links").addClass("bg-red");
  $(".nav-social-media a,.nav-link,.navbrand").addClass("color-white");
});
