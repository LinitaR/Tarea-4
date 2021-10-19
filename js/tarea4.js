function calculadora() {
    var numeroUno, numeroDos, suma, text;
    numeroUno = document.getElementById("num1").value;
    numeroDos = document.getElementById("num2").value;
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        text = "Se deben ingresar dos números válidos";
    } else {
        suma = parseFloat(numeroUno) + parseFloat(numeroDos);
        text = suma;
    }
    document.getElementById("sumando").innerHTML = text;
}