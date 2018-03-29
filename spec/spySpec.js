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

    // return all information about call [object, args, value]
    it("deve demonstrar o uso do calls.alls", () => {

        Calculadora.somar(1, 1)
        Calculadora.somar(2, 2)

        let retorno = Calculadora.somar.calls.all();

        expect(retorno[1].object).toEqual(Calculadora);
        expect(retorno[1].args).toEqual([2, 2])
        expect(retorno[1].returnValue).toEqual(10)

    })

})