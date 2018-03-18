describe("testes do objeto spy", () => {

    let Calculadora = {
        somar: (n1, n2) => {
            return n1 + n2
        }
    }

    beforeAll(() => {
        spyOn(Calculadora, "somar")
    })

    it("deve chamar o metodo somar ao menos uma vez", () => {
        expect(Calculadora.somar).not.toHaveBeenCalled()
        Calculadora.somar(1, 1)
        expect(Calculadora.somar).toHaveBeenCalled()
    })

})