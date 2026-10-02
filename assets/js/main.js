function toggleMenu() {
  var nav = document.getElementsByClassName("site-header-nav")[0];
  if (!nav) return;
  if (nav.style.display === "inline-flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "inline-flex";
  }
}

(function() {
  // 回到顶部
  var toTop = document.querySelector(".gotop");
  if (!toTop) return;

  var body = document.body;
  var html = document.documentElement;

  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || html.scrollTop || body.scrollTop;
    if (scrollTop >= (window.innerHeight || html.clientHeight)) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  }, { passive: true });

  toTop.addEventListener("click", function(evt) {
    evt.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();