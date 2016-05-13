(function () {
  var $ = _;
  $email = $("input[type=email]");

  $("input[type=email]").click(function () {
    $("#provide_email")
      .removeClass("hide")
      .css({
        top: (this.offsetTop - 50) + "px",
        left: (this.offsetLeft - 100 + this.offsetWidth / 2) + "px"
      });
  });

  $(window).on("resize", function () {
    $("#provide_email")
      .css({
        top: ($email[0].offsetTop - 50) + "px",
        left: ($email[0].offsetLeft - 100 + $email[0].offsetWidth / 2) + "px"
      });
  });

  $("#down_arrow").click(function () {
    smoothScroll.animateScroll(window.innerHeight);    
  });


  $("body").click(function (e) {
    if (e.target.type !== "email")
      $("#provide_email").addClass("hide");
  });
})();
