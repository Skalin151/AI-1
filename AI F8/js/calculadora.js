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