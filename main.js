var totalEl = document.getElementById("total");
var remainingEl = document.getElementById("remaining");
var inputEl = document.getElementById("input");
var total = 0;
var remaining = 60;

inputEl.addEventListener("input", (e) => {
  total = e.target.value.length;
  remaining = 60 - total;
  totalEl.innerHTML = `Total Characters: ${total}`;
  remainingEl.innerHTML = `Remaining: ${remaining}`;
});
