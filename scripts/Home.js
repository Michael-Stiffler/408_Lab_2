var index = 0;
        
function nextSlide() {
    var listOfSlideElements = document.getElementsByClassName("slides");
    for (var i = 0; i < 3; i++) {
        listOfSlideElements[i].style.display = "none";  
    }
    index += 1;
    if (index > 3) {
        index = 1
    }    
    listOfSlideElements[index-1].style.display = "block";  
}