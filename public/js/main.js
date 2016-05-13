(function () {
  var $ = _;

  var $email;

  function callback () {
    $email.click(function () {
      $("#provide_email")
        .removeClass("hide")
        .css({
          top: (this.offsetTop - 50) + "px",
          left: (this.offsetLeft - 100 + this.offsetWidth / 2) + "px"
        });
    });
  }

  var ugh = setInterval(function () {
    $email = $("input[type=email]");
    if ($email[0]) { clearInterval(ugh), callback(); }
  }, 100);

  $(window).on("resize", function () {
    $("#provide_email")
      .css({
        top: ($email[0].offsetTop - 50) + "px",
        left: ($email[0].offsetLeft - 100 + $email[0].offsetWidth / 2) + "px"
      });
  });

  $("#sign_up").click(function () {
    smoothScroll.animateScroll(3000);
  });

  $("#down_arrow").click(function () {
    smoothScroll.animateScroll(window.innerHeight);
  });


  $("body").click(function (e) {
    if (e.target.type !== "email")
      $("#provide_email").addClass("hide");
  });
})();
