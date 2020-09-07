// https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/
window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`aside li a[href="#${id}"]`).parentElement.classList.add('active');
                document.querySelector(`#mobileTOC li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`aside li a[href="#${id}"]`).parentElement.classList.remove('active');
                document.querySelector(`#mobileTOC li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});
// toggle sticky toc
$("#btnToggleStickyTOC").click(function(){
    $("aside").toggleClass("w3-hide");
    $("#leftArrow").toggleClass("w3-hide");
    $("#rightArrow").toggleClass("w3-hide");
});
// toggle mobile TOC
$("#btnToggleMobileTOC").click(function(){
    $("#mobileTOCWrapper").toggleClass("w3-hide");
});
// close mobile TOC
$("#mobileTOC a").click(function(){
    $("#mobileTOCWrapper").toggleClass("w3-hide");
});
$("#closeMobileTOC").click(function(){
    $("#mobileTOCWrapper").toggleClass("w3-hide");
});