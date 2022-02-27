var index = 0;

function init() {
  var listOfSlideElements = document.getElementsByClassName("slides");
  listOfSlideElements[index].style.display = "block";
  index++;
}

function nextSlide() {
  var listOfSlideElements = document.getElementsByClassName("slides");
  for (var i = 0; i < 3; i++) {
    listOfSlideElements[i].style.display = "none";
  }
  index += 1;
  if (index > 3) {
    index = 1;
  }
  listOfSlideElements[index - 1].style.display = "block";
}

function previousSlide() {
  var listOfSlideElements = document.getElementsByClassName("slides");
  for (var i = 0; i < 3; i++) {
    listOfSlideElements[i].style.display = "none";
  }
  index -= 1;
  if (index < 1) {
    index = 3;
  }
  listOfSlideElements[index - 1].style.display = "block";
}
