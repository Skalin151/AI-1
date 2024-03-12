function add(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mul(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Não é possível dividir por zero";
    }
  }
  
  var operacoes = {
    "add": add,
    "sub": sub,
    "mul": mul,
    "div": div
  };
  
  function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operation").value;
  
  
    localStorage.setItem("num1", num1);
    localStorage.setItem("num2", num2);
    localStorage.setItem("operacao", operacao);
  
    // Retorna uma promise para calcular a operação
    return new Promise(function (resolve, reject) {
      var resultado;
      if (operacao in operacoes) {
        resultado = operacoes[operacao](num1, num2);
      } else {
        resultado = "Operação inválida ヾ(＠⌒ー⌒＠)ノ";
      }
  
    
      resolve(resultado);
    });
  }
  
  calcular().then(function (resultado) {

    document.getElementById("result").innerHTML = "Resultado: " + resultado;
  });
  