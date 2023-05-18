(function ($) {
  "use strict";

  /*============= preloader js css =============*/
  var cites = [];
  cites[0] =
    "9then";
  cites[1] = "9then";
  cites[2] = "9then";
  cites[3] = "9then";
  var cite = cites[Math.floor(Math.random() * cites.length)];
  $("#preloader p").text(cite);
  $("#preloader").addClass("loading");

  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").fadeOut(500, function () {
        $("#preloader").removeClass("loading");
      });
    }, 500);
  });
})(jQuery);
