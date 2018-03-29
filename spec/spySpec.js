describe("testes do objeto spy", () => {

    let Calculadora = {
        somar: (n1, n2) => {
            return n1 + n2
        },

        subtrair: (n1, n2) => {
            return n1 - n2
        }
    }

    beforeAll(() => {
        spyOn(Calculadora, "somar").and.throwError("erro");
    })

    it("deve demonstrar o uso do calls.argsFor", () => {
        Calculadora.somar(1, 1)
        Calculadora.somar(2, 2)

        //validate first call 
        expect(Calculadora.somar().calls.argsFor(0)).toEqual([1, 1])
        //validate secound call
        expect(Calculadora.somar().calls.argsFor(1)).toEqual([2, 2])

    })

})