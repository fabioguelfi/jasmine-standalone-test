describe("testes do objeto jasmine.objectContaing", () => {
    let carro

    beforeAll(() => {
        carro = {
            carro = {
                'ano': 2017
            }
        }
    })

    it("deve demonstrar o uso do jasmine.objectContaing", () => {
        expect(carro).toEqual(jasmine.objectContaing({ 'ano': 2017 }));
        expect(carro).not.toEqual(jasmine.objectContaing({ 'anos': 2017 }))
    })

})