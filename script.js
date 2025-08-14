function sumar() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = "Resultado: " + (a + b);
}

function restar() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = "Resultado: " + (a - b);
}