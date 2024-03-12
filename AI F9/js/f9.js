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

  document.getElementById("result").innerText = "A calcular a operação...";

  setTimeout(function () {
    var resultado;
    if (operacao in operacoes) {
      resultado = operacoes[operacao](num1, num2);
    } else {
      resultado = "Operação inválida (┬┬﹏┬┬)";
    }

    document.getElementById("result").innerText = "Resultado: " + resultado;
  }, 3000);
}