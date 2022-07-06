/// <reference types="cypress" />

it("Sem testes", () => {});

function soma1(a, b) {
    return a + b;
}

const soma2 = function(a, b){
    return a + b
}

const soma3 = (a, b) => {
    return a + b
}

const soma4 = (a) => a + a;

console.log(soma1(8, 10))
console.log(soma2(2, 6))
console.log(soma3(2, 1))
console.log(soma4(12, 15))