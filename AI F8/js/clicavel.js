let estado = true;

function clicar() {
  estado = !estado;
  document.querySelector(".alerta").textContent = estado ? "Verdadeiro" : "Falso";
}



var dia = 0;

function clicar1() {
  dia++;
  if (dia === 0) {
    document.querySelector(".alerta1").textContent = "Domingo";
  } else if (dia === 1) {
    document.querySelector(".alerta1").textContent = "Segunda";
  } else if (dia === 2) {
    document.querySelector(".alerta1").textContent = "Terça";
  } else if (dia === 3) {
    document.querySelector(".alerta1").textContent = "Quarta";
  } else if (dia === 4) {
    document.querySelector(".alerta1").textContent = "Quinta";
  } else if (dia === 5) {
    document.querySelector(".alerta1").textContent = "Sexta";
  } else {
    document.querySelector(".alerta1").textContent = "Sábado";
    dia = 0;
  }
}






var dia_index = 0;
var dia_da_semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

function clicar2() {
  dia_index++;
  if (dia_index === dia_da_semana.length) {
    dia_index = 0;
  }
  document.querySelector(".alerta2").textContent = dia_da_semana[dia_index];
}