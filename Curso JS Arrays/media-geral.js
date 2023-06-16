const salaJS = [7, 8, 4, 6];
const salaJava = [6, 9, 5, 10];
const salaPython = [8, 7, 9, 10];

function calculaMedia (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);