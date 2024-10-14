const epicMix = [
  "46 & 2",
  "Wolf Like Me",
  "Try a Little Tenderness",
  "Black Dog",
  "Suzie Q",
  "Run",
  "Run Through the Jungle",
  "Quick Death in Texas",
  "Little Green Bag",
  "On The Road Again",
  "Jolene",
  "Rubberband Man",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");

  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
