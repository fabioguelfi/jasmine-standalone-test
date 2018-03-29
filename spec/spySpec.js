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

    // return last last call method to analize in matchers 
    // return object with all props on last call about calls.all
    it("deve demonstrar o uso do calls.mostRecent", () => {

        Calculadora.somar(1, 1)
        Calculadora.somar(2, 2)

        let retorno = Calculadora.somar.calls.mostRecent()

        expect(retorno.object).toEqual(Calculadora)
        expect(retorno.args).toEqual([2, 2])
        expect(retorno.returnValue).toEqual(10)

    })

})