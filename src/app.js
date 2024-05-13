/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#excusa").innerHTML = crearexcusa();
  console.log("No me lo vas a creer pero...!");
};
let crearexcusa = function() {
  let quien = ["El gobierno", "El perro", "Mi madre", "La inquisición"];
  let hizo = [" vendio", " regalo", " dono", " quemo"];
  let aquien = [" el carro", " la camioneta", " la tarea", " el jardin"];
  let cuando = [
    " ayer",
    " el jueves",
    " hace menos de 5 minutos",
    " hace 5 horas"
  ];

  let quienIndex = Math.floor(Math.random() * quien.length);
  let hizoIndex = Math.floor(Math.random() * hizo.length);
  let aquienIndex = Math.floor(Math.random() * aquien.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienIndex] +
    hizo[hizoIndex] +
    aquien[aquienIndex] +
    cuando[cuandoIndex]
  );
};
