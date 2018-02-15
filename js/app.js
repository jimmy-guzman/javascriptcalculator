const keys = document.querySelectorAll("[data-key]");

function handleDisplay(key) {
  if (displayForm.entries.value.length < 10) {
    displayForm.entries.value += key;
  }
}

function evaluate() {
    let answer = eval(displayForm.entries.value);
    displayForm.reset();
    handleDisplay(answer);
}

function handleNumKey(e) {
  if (String(this.dataset.key) === "clear") {
    displayForm.reset();
  } else if (String(this.dataset.key) === "=") {
    evaluate();
  } else {
    handleDisplay(this.dataset.key);
  }
}

keys.forEach(key => key.addEventListener("click", handleNumKey));
