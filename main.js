const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");
const inputEl = document.getElementById("input");
let total = 0;
let remaining = 60;

inputEl.addEventListener("input", (e) => {
  total = e.target.value.length;
  remaining = 60 - total;
  totalEl.innerHTML = `Total Characters: ${total}`;
  remainingEl.innerHTML = `Remaining: ${remaining}`;
});
