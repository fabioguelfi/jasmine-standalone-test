describe("testes do objeto spy", () => {

    let Calculadora = {
        somar: (n1, n2) => {
            return n1 + n2
        }
    }

    beforeAll(() => {
        spyOn(Calculadora, "somar")
    })

    it("deve chamar o metodo somar com os parametros validos", () => {

        Calculadora.somar(1, 1)
        Calculadora.somar(7, 7)
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 1)
        expect(Calculadora.somar).toHaveBeenCalledWith(7, 7)

    })

})