window.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector(".building-decoration");
    var initialBottom = image.getBoundingClientRect().bottom;

    function updateImagePosition(){
        var scrollY = window.scrollY || window.pageYOffset;
        var currentBottom = initialBottom + scrollY;

        if(currentBottom >= window.innerHeight){
            image.style.position = "absolute";
            image.style.bottom = "0";
        }
        else{
            image.style.position = 'fixed';
            image.style.bottom = '0';
        }
    }

    window.addEventListener('scroll', updateImagePosition);
    window.addEventListener('resize', updateImagePosition);
});