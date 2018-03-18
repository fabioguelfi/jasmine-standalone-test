describe("testes do objeto spy", () => {

    let Calculadora = {
        somar: (n1, n2) => {
            return n1 + n2
        }
    }

    beforeAll(() => {
        spyOn(Calculadora, "somar")
    })

    it("deve chamar o metodo somar 2 vezes", () => {

        Calculadora.somar(1, 1)
        Calculadora.somar(7, 7)
        expect(Calculadora.somar).toHaveBeenCalledTimes(2)

    })

})