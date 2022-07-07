/// <reference types="cypress" />

it("Igualdade", () => {
    const val1 = 5;

    expect(val1).equal(5);
    expect(val1, 'Deveria ser 5').equal(5);
    expect(val1).to.be.equal(5);
    expect(val1).not.to.be.equal(10);
})

it("String of tests", () => {
    const str = "Curso de Cypress";
    
    expect(str).to.be.equal('Curso de Cypress');
    expect(str).to.be.have.length(16);
    expect(str).contains('Cypress');

    expect(str).to.match(/^Curso/)
    expect(str).to.match(/Cypress$/)
    expect(str).to.match(/.{16}/)
    expect(str).to.match(/\D{16}/)

})

it("Tests of numbers", () => {
    const number1 = 5;
    const fnumber2 = 5.76876444564

    expect(fnumber2).to.be.equal(5.76876444564);
    expect(fnumber2).to.be.above(4.9);
    expect(fnumber2).to.be.below(5.8);

    expect(fnumber2).to.be.closeTo(5.7, 0.1);

})
