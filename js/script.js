"use strict";

const video = document.querySelector(".video");
const iframe = document.querySelector("iframe");
const videoOverlay = document.querySelector(".vid-overlay");

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

const closeVideo = function () {
  video.classList.add("hidden");
  videoOverlay.classList.add("hidden");
  document.querySelector("html").style.overflowY = "unset";
  iframe.contentWindow.postMessage(
    '{"event":"command","func":"stopVideo","args":""}',
    "*"
  );
};

openBtn.addEventListener("click", function () {
  video.classList.remove("hidden");
  videoOverlay.classList.remove("hidden");

  window.scrollTo(0, 0);
  document.querySelector("html").style.overflowY = "hidden";
});

closeBtn.addEventListener("click", closeVideo);
videoOverlay.addEventListener("click", closeVideo);
document.addEventListener("keydown", function ({ key }) {
  if (!video.classList.contains("hidden") && key === "Escape") closeVideo();
});
