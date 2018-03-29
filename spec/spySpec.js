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

    // analise all params
    it("deve demonstrar o uso do calls.AllArgs", () => {

        Calculadora.somar(1, 1)
        Calculadora.somar(2, 2)

        expect(Calculadora.somar.calls.allArgs())
            .toEqual([[1, 1], [2, 2]])

    })

})