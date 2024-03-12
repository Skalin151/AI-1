





//Exercicio 1
let estado = true;

function clicar() {
  estado = !estado;
  document.querySelector(".alerta").textContent = estado ? "Verdadeiro" : "Falso";
}

//Exercicio 2
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





//Exercicio 2 b)
var dia_index = 0;
var dia_da_semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

function clicar2() {
  dia_index++;
  if (dia_index === dia_da_semana.length) {
    dia_index = 0;
  }
  document.querySelector(".alerta2").textContent = dia_da_semana[dia_index];
}




//Exercicio 3
document.addEventListener('DOMContentLoaded', function () {
    const colorLabels = document.querySelectorAll('.color-label');
    const colorDiv = document.getElementById('colorDiv');

    colorLabels.forEach(label => {
        label.addEventListener('mouseover', function () {
            const color = this.textContent;
            colorDiv.style.backgroundColor = color;
        });

        label.addEventListener('mouseout', function () {
            colorDiv.style.backgroundColor = '';
        });
    });
});



//Exercicio 4
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





//Exercicio 6
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


//Exercicio 7
function validarFormulario(operacao) {
    
    var valor1 = document.querySelector("#valor1").value;
    var valor2 = document.querySelector("#valor2").value;
  
    if (valor1 === "" || valor2 === "") {
      alert("Preencha todos os campos!");
      return false;
    }
    
    if (parseFloat(valor2) === 0 && operacao === "dividir") {
      alert("Nao e possivel dividir por 0!");
      return false;
    }

    
  
    return true;
  }
  
  function multiplicar() {
     
    if (validarFormulario("multiplicar")) {
      var valor1 = parseFloat(document.querySelector("#valor1").value);
      var valor2 = parseFloat(document.querySelector("#valor2").value);
  
      var resultado = valor1 * valor2;
  
      document.querySelector("#resultado").textContent = "O Resultado é: " + resultado;
    }
  }
  
  function dividir() {
    if (validarFormulario("dividir")) {
      var valor1 = parseFloat(document.querySelector("#valor1").value);
      var valor2 = parseFloat(document.querySelector("#valor2").value);
  
      var resultado = valor1 / valor2;
  
      document.querySelector("#resultado").textContent = "O Resultado é: " + resultado;
    }
  }