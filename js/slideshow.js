function slideShow(slide, numberOfSlides) {
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("w3-badge");
    var buttonAll = document.getElementById("buttonAll");
    buttonAll.style.display = "inline";

    // 22 is the number used for show all and collapse
    if (slide == "22") {
        if (buttonAll.innerHTML == "Collapse") {
            for (let i = 1; i < x.length; i++) {
                x[i].style.display = "none";
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" white-circle", "");
            }
            dots[0].className += " white-circle";
            buttonAll.innerHTML = "Show All Slides";
        } else {
            for (let i = 0; i < numberOfSlides; i++) {
                x[i].style.display = "block";
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" white-circle", ""); // remove existing before adding another
                dots[i].className += " white-circle";
            }
            buttonAll.innerHTML = "Collapse";
        }
    } else {
        buttonAll.innerHTML = "Show All Slides";
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" white-circle", "");
        }
        x[slide - 1].style.display = "block";
        dots[slide - 1].className += " white-circle";
    }
}
