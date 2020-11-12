// https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/
window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`aside li a[href="#${id}"]`).parentElement.classList.add('active');
        document.querySelector(`#tocSmall li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`aside li a[href="#${id}"]`).parentElement.classList.remove('active');
        document.querySelector(`#tocSmall li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  }, { rootMargin: '-77px 0px 0px 0px' });
  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});
// toggle toc on small screens
$("#toggleTOCSmall").click(function () {
  $("#tocSmallWrapper").toggleClass("w3-hide");
});
// close toc on small screens
$("#tocSmall a").click(function () {
  $("#tocSmallWrapper").toggleClass("w3-hide");
});
$("#closeTOCSmall").click(function () {
  $("#tocSmallWrapper").toggleClass("w3-hide");
});
// toggle sticky toc
$("#toggleStickyTOC").click(function () {
  $("#stickyTOCWrapper").toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});

// simulate position sticky
window.onscroll = function () { myFunction() };

var stickyTOC = document.getElementsByTagName("aside")[0];
var toggleStickyTOC = document.getElementById("toggleStickyTOC");
var stickyDistanceToTop = stickyTOC.offsetTop;
function myFunction() {
  if (window.pageYOffset >= (stickyDistanceToTop + 25)) {
    stickyTOC.classList.add("sticky85");
    toggleStickyTOC.classList.add("sticky85");
  } else {
    stickyTOC.classList.remove("sticky85");
    toggleStickyTOC.classList.remove("sticky85");
  }
  // when aside is 80px near the footer
  if ($('aside').offset().top + $('aside').height() >= $('footer').offset().top - 80) {
    $('aside').removeClass("sticky85").addClass("absoluteBottom");
  } else {
    // when it's not
    $('aside').removeClass("absoluteBottom");
  }
}

// tutorial-complete html
$(".toggleStickyTOCRadical").click(function () {
  $("a[href='#radical']").next().toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});
$(".toggleStickyTOCDecomp").click(function () {
  $("a[href='#decomposition-rules']").next().toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});
$(".toggleStickyTOCWildCard").click(function () {
  $("a[href='#wild-card']").next().toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});
$(".toggleStickyTOCShortCode").click(function () {
  $("a[href='#short-code']").next().toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});
$(".toggleStickyTOCSymbol").click(function () {
  $("a[href='#symbol']").next().toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});
$(".toggleStickyTOCOthers").click(function () {
  $("a[href='#others']").next().toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});
// tutorial-recap.html
$(".toggleStickyTOCTest").click(function () {
  $("a[href='#test']").next().toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});
// download.html
$(".toggleStickyTOCArrayIME").click(function () {
  $("a[href='#array-IME']").next().toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});

$(".toggleStickyTOCWindows").click(function () {
  $("a[href='#windows']").next().toggleClass("w3-hide");
  $(this).children().toggleClass("w3-hide");
});
