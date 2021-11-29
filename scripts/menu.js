function openHamburguerMenu() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    closeMenu(x);
  } else {
    openMenu(x);
  }

  var x = document.getElementById("hamburger-icon");
  if (x.style.display === "block") {
    closeMenu(x);
  } else {
    openMenu(x);
  }

  var x = document.getElementById("hamburger-close");
  if (x.style.display === "block") {
    closeMenu(x);
  } else {
    openMenu(x);
  }

}

function closeMenu(x) {
  x.style.display = "none";
  window.onscroll = function () { };
}

function openMenu(x) {
  x.style.display = "block";
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
}
