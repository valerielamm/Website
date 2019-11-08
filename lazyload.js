document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;

    const lazyLoad = function () {
        if (active === false) {
            active = true;
            
            lazyImages.forEach(function (lazyImage) {
                
                let img = document.createElement('img');
                img.src = lazyImage.dataset.src;
                var poll = setInterval(function () {
                    if (img.naturalWidth) {
                        clearInterval(poll);
                        let w = img.naturalWidth; 
                        let h = img.naturalHeight;
                        let r = w/h; //ratio
                        lazyImage.style.height = lazyImage.width/r + "px";
                    }
                }, 10);
                
            });

            setTimeout(function () {
                lazyImages.forEach(function (lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");

                        lazyImages = lazyImages.filter(function (image) {
                            return image !== lazyImage;
                        });

                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });

                active = false;
            }, 200);
        }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});

/*
Add to img tag:

class="lazy" src="lowres.jpg" data-src="highres.jpg" data-srcset="highres.jpg 2x, lowres.jpg 1x"
*/
