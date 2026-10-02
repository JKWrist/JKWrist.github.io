(function() {
  function adjustSearchBoxWidth() {
    var searchBar = document.getElementById("site_search");
    var searchBox = document.getElementById("search_box");
    if (!searchBar || !searchBox) return;

    var postDirectory = document.querySelector(".post-directory");
    var width = 280;
    if (postDirectory && getComputedStyle(postDirectory).display !== "none") {
      width = 300;
    }
    searchBar.style.width = width + "px";
    searchBox.style.width = (width - 65) + "px";
  }

  document.addEventListener("DOMContentLoaded", function() {
    adjustSearchBoxWidth();
    window.addEventListener("resize", adjustSearchBoxWidth);
  });
})();