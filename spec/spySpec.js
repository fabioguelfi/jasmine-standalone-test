describe("testes do objeto jasmine.createSpyObject", () => {

    let Calculadora;

    beforeAll(() => {
        Calculadora =  jasmine.createSpyObject("Calculadora", 
        ["somar", "subtrair"])

        Calculadora.somar.and.return(5)

    })

})