const notas = [10, 6, 8, 5.5, 10]; 

let somaDasNotas = somaDasNotas = 0;

for(let i = 0; indice < notas.length; indice++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}.`);