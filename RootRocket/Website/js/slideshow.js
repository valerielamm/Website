function slideShow(slide, numberOfSlides) {
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("w3-badge");

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white-circle", "");
    }
    x[slide - 1].style.display = "block";
    dots[slide - 1].className += " white-circle";
}