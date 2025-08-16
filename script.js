// sumar
function sumar() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = parseFloat(num1) + parseFloat(num2);
  document.getElementById("resultado").innerText = resultado;
}

//  restar
function restar() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = parseFloat(num1) - parseFloat(num2);
  document.getElementById("resultado").innerText = resultado;
}

// multiplicar 
function multiplicar() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = parseFloat(num1) * parseFloat(num2);
  document.getElementById("resultado").innerText = resultado;
}

// dividir 
function dividir() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num2 == 0) {
    document.getElementById("resultado").innerText = "No se puede dividir por cero";
  } else {
    let resultado = parseFloat(num1) / parseFloat(num2);
    document.getElementById("resultado").innerText = resultado;
  }
}