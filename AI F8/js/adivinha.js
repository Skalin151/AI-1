var numero = Math.floor(Math.random() * 11);

function tentar() {
  var inputNumero = document.querySelector("#numero");
  var numeroDigitado = parseInt(inputNumero.value);

  if (numeroDigitado === numero) {
    alert("Acertou!");
    inputNumero.disabled = true;
  } else {
    alert("Errou! O numero correto e " + numero);
    inputNumero.value = "";
  }
}






var numero1 = Math.floor(Math.random() * 101);

function tentar1() {
  var inputNumero = document.querySelector("#numero1");
  var numeroDigitado1 = parseInt(inputNumero.value);

  if (numeroDigitado1 === numero1) {
    alert("Acertou!");
    inputNumero.disabled = true;
  } else if (numeroDigitado1 < numero1) {
    alert("O numero e superior a " + numeroDigitado1);
  } else {
    alert("O numero e inferior a " + numeroDigitado1);
  }
  inputNumero.value = "";
}