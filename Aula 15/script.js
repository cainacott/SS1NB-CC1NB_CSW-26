var issoEumaString = "Isso é uma string";
let issoEumNumero = 42;
const issoEumbooleano = true;
let issoTambemEumaString = "42";

if (issoEumNumero === issoTambemEumaString) {
    console.log("As strings são iguais"); 'As strings são iguais'
} else {
    console.log("As strings são diferentes")
}


console.log(issoEumNumero + issoTambemEumaString);

console.log(issoEumNumero + issoEumNumero);

var issoEumaGlobal = "Eu sou uma variável global";

{
    let issoEumaLocal = "Eu sou uma variável local";
    console.log(issoEumaGlobal);
    console.log(issoEumaLocal);
}

console.log(issoEumaGlobal);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;

console.log(sum.toPrecision(1));

for (let i = 0; i < 5; i++) {
    console.log(i);
    console.log(i*2)
    console.log(i*2+1)
}

// Imprimindo os ímpares com while

let j = 0;
while (j < 5) {
    console.log(j*2+1);
    j++;
}




