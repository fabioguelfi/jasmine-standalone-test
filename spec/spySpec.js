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

    // count how long time this method is call on run
   it("deve demonstrar o uso do call.count", () => {
       Calculadora.somar(1,1)
       Calculadora.somar(2,2);

       expect(Calculadora.somar.calls.count()).toEqual(2);
   })

})