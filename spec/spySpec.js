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
        spyOn(Calculadora, "somar").and.throwError("erro");
    })

    it("deve demonstrar o uso do call.any", () => {
        Calculadora.somar(1, 1);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
    })

})