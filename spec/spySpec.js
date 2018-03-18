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
        spyOn(Calculadora, "somar").and.returnValues(1, 5)
        spyOn(Calculadora, "subtrair")
    })

    it("deve retornar valores distintos para o metodo somar", () => {

        expect(Calculadora.somar(3, 4)).toEqual(1)
        expect(Calculadora.somar(3,3)).toEqual(5)
        expect(Calculadora.somar(4,4)).toBeUndefined()

    })

})