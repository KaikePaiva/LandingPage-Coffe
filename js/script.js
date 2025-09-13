function validarEmail(email) {
  return email.includes("@");
}

document.querySelector("#email").addEventListener("submit", function(event) {
  const email = document.getElementById("email").value;
  if (!validarEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    event.preventDefault(); // impede envio
  }
});