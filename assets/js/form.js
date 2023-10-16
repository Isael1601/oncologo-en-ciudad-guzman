document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  // INGRESA UN NÚMERO DE WHATSAPP VÁLIDO AQUÍ:
  let telefono = "+525513553177";

  let cliente = document.querySelector("#cliente").value;
  let sintomas = document.querySelector("#sintomas").value;
  let cita = document.querySelector("#cita").value;
  let colonia = document.querySelector("#colonia").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://wa.me/${telefono}/?text=
    Dra. Verónica Vega%0A
    Información de paciente.%0A%0A
    Nombre:%0A
    ${cliente}%0A
    Síntomas:%0A
    ${sintomas}%0A
    ¿Deseas una sesión para las próximas 24 horas?%0A
    ${cita}%0A
    El servicio es en CDMX, ¿te queda bien?%0A
    ${colonia}%0A`;

  if (cliente === "" || cita === "" || colonia === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});