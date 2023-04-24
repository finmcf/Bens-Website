const mediaList = [
  { type: "video", src: "./HA+-28SA/Video HA+-28SA.mp4" },
  { type: "image", src: "./HA+-28SA/1.jpg" },
  { type: "image", src: "./HA+-28SA/2.jpg" },
  { type: "image", src: "./HA+-28SA/3.jpg" },
  { type: "image", src: "./HA+-28SA/4.jpg" },
  { type: "image", src: "./HA+-28SA/5.jpg" },
  { type: "image", src: "./HA+-28SA/6.jpg" },
  { type: "image", src: "./HA+-28SA/7.jpg" },
  { type: "image", src: "./HA+-28SA/8.jpg" },
  { type: "image", src: "./HA+-28SA/9.jpg" },
  { type: "image", src: "./HA+-28SA/10.jpg" },
];

let currentIndex = 0;

function displayMedia() {
  const video = document.getElementById("video");
  const image = document.getElementById("image");
  const playButton = document.getElementById("playButton");
  const currentMedia = mediaList[currentIndex];

  if (currentMedia.type === "video") {
    video.src = currentMedia.src;
    video.style.display = "block";
    playButton.style.display = "block";
    image.style.display = "none";
    video.pause(); // Make sure the video is paused when switching media
  } else if (currentMedia.type === "image") {
    image.src = currentMedia.src;
    image.style.display = "block";
    video.style.display = "none";
    playButton.style.display = "none";
    video.pause(); // Pause the video when displaying an image
  }
}

function previousMedia() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = mediaList.length - 1;
  }
  displayMedia();
}

function nextMedia() {
  currentIndex++;
  if (currentIndex >= mediaList.length) {
    currentIndex = 0;
  }
  displayMedia();
}

function toggleVideoPlayback() {
  const video = document.getElementById("video");
  const playButton = document.getElementById("playButton");

  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "block";
  }
}

displayMedia();

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const playButton = document.getElementById("playButton");

  video.addEventListener("click", toggleVideoPlayback);
  playButton.addEventListener("click", toggleVideoPlayback);
});
