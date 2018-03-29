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
        spyOn(Calculadora, "somar").and.callFake((n1, n2) => {
          return n1 - n2;
        })
        spyOn(Calculadora, "subtrair")
    })

    it("deve transformar o metodo somar em subtracao", () => {
        expect(Calculadora.somar(5,2)).toEqual(3)
    })

})