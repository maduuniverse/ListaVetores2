let numeros = [1, 2, 3, 4, 5];
let pares = [2, 4];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

for (let i = 0; i < 5; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}

alert(pares);
