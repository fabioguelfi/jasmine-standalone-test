describe("testes do objeto jasmine.anything", () => {
    let dobro

    beforeAll(() => {
        dobro = jasmine.createSpy("dobro")
    })

    it("deve demonstrar o uso do jasmine.anyThing", () => {
        dobro(10)
        expect(dobro).toHaveBeenCalledWith(jasmine.anyThing())
        expect({}).toEqual(jasmine.anyThing())
    })

})