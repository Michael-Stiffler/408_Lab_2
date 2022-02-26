const video = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");
const rewind = document.getElementById("rewind");
const forward = document.getElementById("forward");
const image = document.getElementById("image");

let time = 80;

doAnimation();

play.addEventListener("click", playOrPause);
pause.addEventListener("click", playOrPause);
restart.addEventListener("click", restartVideo);
rewind.addEventListener("click", rewindVideo);
forward.addEventListener("click", forwardVideo);

document.getElementById("play").style.display = "none";
document.getElementById("pause").style.display = "block";

play.onmouseover = function (e) {
  restart.style.display = "block";
  rewind.style.display = "block";
  forward.style.display = "block";
};

pause.onmouseover = function (e) {
  restart.style.display = "block";
  rewind.style.display = "block";
  forward.style.display = "block";
};

function restartVideo() {
  video.currentTime = 0;
  playOrPause();
}

function playOrPause() {
  if (video.paused) {
    document.getElementById("play").style.display = "none";
    document.getElementById("rewind").style.display = "none";
    document.getElementById("forward").style.display = "none";
    document.getElementById("restart").style.display = "none";
  } else {
    document.getElementById("pause").style.display = "none";
    document.getElementById("rewind").style.display = "none";
    document.getElementById("forward").style.display = "none";
    document.getElementById("restart").style.display = "none";
  }

  setTimeout(function () {
    if (video.paused) {
      document.getElementById("play").style.display = "none";
      document.getElementById("pause").style.display = "block";
      video.play();
    } else {
      document.getElementById("pause").style.display = "none";
      document.getElementById("play").style.display = "block";
      video.pause();
    }
  }, 100);
}

function rewindVideo() {
  if (video.paused) {
    video.currentTime -= 10;
    document.getElementById("pause").style.display = "none";
    document.getElementById("rewind").style.display = "none";
    document.getElementById("forward").style.display = "none";
    document.getElementById("restart").style.display = "none";
  } else {
    video.currentTime -= 10;
    document.getElementById("play").style.display = "none";
    document.getElementById("rewind").style.display = "none";
    document.getElementById("forward").style.display = "none";
    document.getElementById("restart").style.display = "none";
  }
}
function forwardVideo() {
  if (video.paused) {
    video.currentTime += 10;
    document.getElementById("pause").style.display = "none";
    document.getElementById("rewind").style.display = "none";
    document.getElementById("forward").style.display = "none";
    document.getElementById("restart").style.display = "none";
  } else {
    video.currentTime += 10;
    document.getElementById("play").style.display = "none";
    document.getElementById("rewind").style.display = "none";
    document.getElementById("forward").style.display = "none";
    document.getElementById("restart").style.display = "none";
  }
}

function doAnimation() {
  let index = 1;

  animation = setInterval(() => {
    index++;
    if (index == 6) {
      index = 1;
    }
    image.src = "../images/run-" + index + ".png";
  }, time);
}
