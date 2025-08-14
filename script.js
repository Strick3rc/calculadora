function sumar(a, b) {
    return a + b;
}

function calcular() {
//valores
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
//suma
    const resultado = sumar(num1, num2);

//resultado
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}

console.log("Prueba:", sumar(2, 3)); 