const container = document.getElementById("quote-container");

export function renderQuote({ sign, message }) {
  container.innerHTML = `
    <p><strong>${sign}</strong></p>
    <p>${message}</p>
  `;
  container.classList.remove("fade-out");
  container.classList.add("visible");
}

export function fadeOutQuote() {
  container.classList.remove("visible");
  container.classList.add("fade-out");
}

export function renderError() {
  container.innerHTML = "<p>Por favor ingresa una fecha válida.</p>";
  container.classList.add("visible");
}

export function clearView() {
  container.innerHTML = "";
  container.classList.remove("visible", "fade-out");
}

export function disableButton() {
  document.getElementById("get-horoscope").disabled = true;
}

export function enableButton() {
  document.getElementById("get-horoscope").disabled = false;
}
