$(window).on("scroll", function () {
  toggleBackToTopButton();

  if ($(window).scrollTop() === 0) {
    removeActiveClassFromLinks();
  }

  const menu = $("#menu");
  if ($(window).scrollTop() > 0) {
    menu.addClass("scrolled");
  } else {
    menu.removeClass("scrolled");
  }

  const sections = $(".section-box");
  const navLinks = $("#menu .menu-item");

  sections.each(function (index, section) {
    const rect = section.getBoundingClientRect();
    if (rect.top > 0 && !(rect.bottom > 0)) {
      navLinks.removeClass("active");
      $(navLinks[index]).addClass("active");
      const id = $(section).attr("id");
      history.pushState(null, null, "#" + id);
    }
  });
});

function toggleBackToTopButton() {
  const backToTopButton = $("#backToTop");
  if ($(document).scrollTop() > 20) {
    backToTopButton.css("display", "block");
  } else {
    backToTopButton.css("display", "none");
  }
}

const menuLinks = $("#menu a");

menuLinks.on("click", function () {
  removeActiveClassFromLinks();
  $(this).addClass("active");
});

$(".hamburger").on("click", function () {
  $("#menu").toggleClass("active");
});

$(document).on("click", function (event) {
  if (!$(".hamburger").is(event.target) && !$("#menu").is(event.target)) {
    $("#menu").removeClass("active");
  }
});

$(".times").on("click", function () {
  $("#menu").toggleClass("active");
});

function removeActiveClassFromLinks() {
  menuLinks.removeClass("active");
}


$(document).ready(function() {
  $("#logo").hover(
      function() {
        $(this).attr("src", "/img/splash_tiny.gif");
      },
      function() {
          $(this).attr("src", "/img/instapatent_tiny.png");
      }
  );
});

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  $('.contents-area').css('background-position', 'right ' + (scrollTop * 0.5 - 400) + 'px');
});