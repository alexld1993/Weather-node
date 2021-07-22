console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const firstMsg = document.querySelector("#first-message");
const secondMsg = document.querySelector("#second-message");

firstMsg.textContent = "Loading ...";
secondMsg.textContent = "";
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  fetch(`http://localhost:3000/weather/?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          firstMsg.textContent = data.error;
        } else {
          firstMsg.textContent = data.location;
          secondMsg.textContent = data.forecast;
        }
      });
    }
  );
});
