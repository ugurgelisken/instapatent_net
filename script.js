$(document).ready(function () {
  // Cache selectors for performance
  const $window = $(window);
  const $menu = $("#menu");
  const $menuLinks = $("#menu a");
  const $backToTopButton = $("#backToTop");
  const $logo = $("#logo");
  const $sections = $(".section-box");
  const $backgroundImage = $(".background-image");

  // Scroll event listener
  $window.on("scroll", function () {
    toggleBackToTopButton();
    toggleMenuScrolledClass();
    setActiveLinkOnScroll();
    parallaxBackgroundImage();
  });

  // Click event listeners
  $menuLinks.on("click", function () {
    removeActiveClassFromLinks();
    $(this).addClass("active");
  });

  $(".hamburger, .times").on("click", function () {
    $menu.toggleClass("active");
  });

  $(document).on("click", function (event) {
    if (!$(".hamburger").is(event.target) && !$menu.is(event.target)) {
      $menu.removeClass("active");
    }
  });

  // Hover event listener
  $logo.hover(
    function () {
      $(this).attr("src", "/img/splash_tiny.gif");
    },
    function () {
      $(this).attr("src", "/img/instapatent_tiny.png");
    }
  );

  // Functions
  function toggleBackToTopButton() {
    if ($(document).scrollTop() > 20) {
      $backToTopButton.css("display", "block");
    } else {
      $backToTopButton.css("display", "none");
    }
  }

  function toggleMenuScrolledClass() {
    if ($window.scrollTop() > 0) {
      $menu.addClass("scrolled");
    } else {
      $menu.removeClass("scrolled");
    }
  }

  function setActiveLinkOnScroll() {
    if ($window.scrollTop() === 0) {
      removeActiveClassFromLinks();
    }

    $sections.each(function (index, section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        $menuLinks.removeClass("active");
        $($menuLinks[index]).addClass("active");

        const id = $(section).attr("id");
        history.pushState(null, null, "#" + id);
      }
    });
  }

  function removeActiveClassFromLinks() {
    $menuLinks.removeClass("active");
  }

  function parallaxBackgroundImage() {
    var scrollTop = $window.scrollTop();
    $backgroundImage.css(
      "background-position",
      "center " + scrollTop / 1.2 + "px"
    );
  }
});