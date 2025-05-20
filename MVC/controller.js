import { getSignAndMessage } from "./model.js";
import { renderQuote, renderError, clearView, disableButton, enableButton, fadeOutQuote } from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("get-horoscope");
  const input = document.getElementById("birthdate");

  input.addEventListener("input", () => {
    const date = input.value;
    // Validamos que tenga formato válido YYYY-MM-DD (porque type="date")
    if (date.match(/^\d{4}-\d{2}-\d{2}$/)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });

  button.addEventListener("click", () => {
    const date = input.value;
    if (!date) {
      renderError();
      return;
    }

    disableButton();
    clearView();

    const data = getSignAndMessage(date);
    renderQuote(data);

    // Después de 15 segundos desactiva el mensaje y vuelve a habilitar el botón
    setTimeout(() => {
      fadeOutQuote();
      setTimeout(() => {
        clearView();
        enableButton();
      }, 2000); // Tiempo para que termine la animación de fade-out
    }, 15000);
  });
});
