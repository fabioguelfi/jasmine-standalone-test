describe("teste do to contains", () => {
    it("deve demonstrar o uso do toContain", () => {
        let text = "meu nome e fabio"
        let frutas = ["laranja", "banana", "pera"]

        expect(text).toContain("fabio")
        expect(text).not.toContain("Fabio")

        expect(frutas).toContain("banana")
        expect(frutas).not.toContain("acerola")
    })
})