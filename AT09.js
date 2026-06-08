let vetorA = [1, 2, 3, 4, 5];
let vetorB = [1, 2, 3, 4, 5];
let vetorC = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    vetorA[i] = Number(prompt("Digite um valor para o vetor A:"));
}

for (let i = 0; i < 5; i++) {
    vetorB[i] = Number(prompt("Digite um valor para o vetor B:"));
}

for (let i = 0; i < 5; i++) {
    vetorC[i] = vetorA[i] + vetorB[i];
}

alert(vetorC);
