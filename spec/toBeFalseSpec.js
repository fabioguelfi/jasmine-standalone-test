describe("teste do to be false", () => {
    it("deve demonstrar o uso do to be false", () => {
        expect(null).toBeFalsy()
        expect(undefined).toBeFalsy()
        expect('').toBeFalsy()
        expect(false).toBeFalsy()
        expect(NaN).toBeFalsy()

        //expect(true).toBeFalsy()
    })
})