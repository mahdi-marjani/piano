const now_playing = document.querySelector("div.now-playing");
const keys_container = document.querySelector("ul.keys");
window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`span[data-key="${e.key}"]`);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!key) return;
  const key_note = key.getAttribute("data-note");
  now_playing.textContent = key_note;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  setTimeout(function () {
    key.classList.remove("playing");
  }, 100);
});
console.log(keys_container);
keys_container.addEventListener("mouseover", function () {
  const keys = keys_container.querySelectorAll("span");
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    setTimeout(function () {
      keys[i].classList.add("active");
    }, i * 40);
  }
});
keys_container.addEventListener("mouseout", function () {
  const keys = keys_container.querySelectorAll("span");
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    setTimeout(function () {
      keys[i].classList.remove("active");
    }, i * 40);
  }
});
