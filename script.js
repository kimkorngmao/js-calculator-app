const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "Clear") {
    output = "";
  } else if (btnValue === "Delete") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue) || specialChars.includes(output.slice(-1)) && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.currentTarget.dataset.value));
});

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  document.getElementById('current-time').textContent = timeString;

  // Update time every second
  setTimeout(updateTime, 1000);
}

updateTime()