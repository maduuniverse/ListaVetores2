let numeros = [];
let pares = [];

for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt("Digite um número:"));
}

for (let i = 0; i < 5; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}

console.log(pares);
