// choose between search and show list
function openSearchTag(evt, searchTypeName) {
    let x = document.getElementsByClassName("search-type");
    let tablinks = document.getElementsByClassName("tablink");      
    let clickedTag = evt.currentTarget;
    let clickedDotSpan = clickedTag.getElementsByTagName("span")[0];
    for (elem of x) {
        elem.classList.remove('w3-show');
        elem.classList.add('w3-hide');
    }        
    for (elem of tablinks) {
        const dotSpan = elem.getElementsByTagName("span")[0];
        dotSpan.classList.remove('w3-show-inline-block');
        dotSpan.classList.add('w3-hide');
        elem.classList.add('w3-grayscale');
    }
    document.getElementById(searchTypeName).classList.add('w3-show');
    document.getElementById(searchTypeName).children[0].classList.add('w3-animate-left'); 
    clickedTag.classList.remove('w3-grayscale');
    clickedDotSpan.classList.remove("w3-hide");
    clickedDotSpan.classList.add("w3-show-inline-block");
}
