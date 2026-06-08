let numeros = [];
let crescente = true;

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

for (let i = 0; i < 4; i++) {
    if (numeros[i] > numeros[i + 1]) {
        crescente = false;
        break;
    }
}

if (crescente) {
    alert("O vetor está em ordem crescente.");
} else {
    alert("O vetor não está em ordem crescente.");
}
