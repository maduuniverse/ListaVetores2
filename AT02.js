let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

let procurar = Number(prompt("Digite o número a procurar:"));

if (numeros.includes(procurar)) {
    alert("Número encontrado!");
} else {
    alert("Número não encontrado!");
}
