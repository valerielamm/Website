function initializeSlideShow() {
    // Count number of images
    var imgCount = document.getElementById("imgCountParent").getElementsByTagName("img").length;
    console.log(imgCount + "is the number of dots and slides in the slideshow");

    // Creates and places the circle buttons - same number as imgs
    var slideShowButtonsParent = document.getElementById("slideShowButtonsParent");
    for (let i=1; i <= imgCount; i++) {
        var newCircle = document.createElement('span');
        newCircle.classList.add("w3-badge");
        newCircle.setAttribute("onclick", "switchSlide(" + i + ")");
        if(i==1){newCircle.className += " white-circle";}; // Makes first circle visually selected
        slideShowButtonsParent.appendChild(newCircle);
    };

    // Displays first image
    var slideImg = document.getElementsByClassName("mySlides");
    slideImg[0].style.display = "block";
} 

initializeSlideShow();


function switchSlide(slideCount){
    var buttonAll = document.getElementById("buttonAll");
    var imgCount = document.getElementById("imgCountParent").getElementsByTagName("img").length;
    var slideImg = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("w3-badge");

    // 21 is the slide number used to trigger 'show all' and 'collapse'
    if (slideCount == "21") {
        // Clicking the collapse button (goes to showing only slide 1)
        if (buttonAll.innerHTML == "Collapse") {
            for (let i = 1; i < imgCount; i++) {
                slideImg[i].style.display = "none";
            }
            for (let i = 1; i < dots.length; i++) { // Skips the first circle so it stays visually selected
                dots[i].className = dots[i].className.replace(" white-circle", "");
            }
            buttonAll.innerHTML = "Show All Slides";
        } else {
            // Clicking the show all button
            for (let i = 0; i < imgCount; i++) {
                slideImg[i].style.display = "block";
            }
            for (let i = 0; i < dots.length; i++) { // All circles are the visually selected when showing all slides
                dots[i].className = dots[i].className.replace(" white-circle", ""); // Removes existing class before adding another to avoid duplicates
                dots[i].className += " white-circle";
            }
            buttonAll.innerHTML = "Collapse";
        }
    } else {
        // Reset incase all slides are open
        buttonAll.innerHTML = "Show All Slides";
        for (let i = 0; i < imgCount; i++) {
            slideImg[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" white-circle", ""); // Removes existing class before adding another to avoid duplicates
        }

        // Selects correct img and circle
        slideImg[slideCount - 1].style.display = "block";
        dots[slideCount - 1].className += " white-circle";
    }
};