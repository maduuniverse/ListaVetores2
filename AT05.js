let numeros = [];
let produto = 1;

for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt("Digite um número:"));
    produto *= numeros[i];
}

console.log("Produto:", produto);
