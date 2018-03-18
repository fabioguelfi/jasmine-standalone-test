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

    it("deve retornar 10 para o metodo somar", () => {
        
        expect(Calculadora.somar(7, 7)).toEqual(10)

    })

})