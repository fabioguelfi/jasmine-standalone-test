describe("testes do objeto jasmine.stringMAtching", () => {

    let exibirTexto

    beforeAll(() => {
        exibirTexto = jasmine.createSpy("exibirTexto")
    })

    it("deve demonstrar o uso do jasmine.stringMatching", () => {
        exibirTexto("curso de Jasmine")

        expect(exibirTexto).toHaveBeenCalledWith(
            jasmine.stringMatching("Jasmine"));
        expect(exibirTexto).toHaveBeenCalledWith(
            jasmine.stringMatching(/jasmine/i));
        expect("CUrso de Javascript").toEqual(
            jasmine.stringMatching("Javascript"));    

    })

})