const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function displayData({ value: joke }) {
  content.textContent = joke;
}
