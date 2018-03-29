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
        spyOn(Calculadora, "somar").and.returnValue(10)
        spyOn(Calculadora, "subtrair")
    })
    // call.reset is reset history on calls object
    it("deve demonstrar o uso do calls.reset", () => {

        Calculadora.somar(1, 1)
        Calculadora.somar(2, 2)

        // check is call one time just
        expect(Calculadora.somar.calls.any()).toBeTruthy()

        // will reset call history
        Calculadora.somar.call.reset()

        // now Calculadores.somar not is call more
        expect(Calculadora.somar.calls.any()).toBeFalsy()

    })

})