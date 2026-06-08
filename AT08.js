let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
    soma += numeros[i];
}

let media = soma / 5;

alerta("Média:", media);

for (let i = 0; i < 5; i++) {
    if (numeros[i] > media) {
        alerta(numeros[i]);
    }
}
