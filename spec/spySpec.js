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

    // return first call method to analize in matchers 
    // return object with all props on first call about calls.all
    it("deve demonstrar o uso do calls.first", () => {

        Calculadora.somar(1, 1)
        Calculadora.somar(2, 2)

        let retorno = Calculadora.somar.calls.first()

        expect(retorno.object).toEqual(Calculadora)
        expect(retorno.args).toEqual([1,1])
        expect(retorno.returnValue).toEqual(10)

    })

})