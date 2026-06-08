let numeros = [1, 2, 3, 4, 5];
let produto = 1;

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
    produto *= numeros[i];
}

alert("Produto:", produto);
