describe("teste toBeDefined", () => { //suit
    it("deve demonstrar o uso do toBeDefined", () => { //spec
        let n1 = 10
        let n2
        let n3 = undefined
        
        expect(n1).toBeDefined()
        expect(null).toBeDefined()
        expect(NaN).toBeDefined()

        expect(n2).not.toBeDefined()
        expect(n3).not.toBeDefined()

        // expect
    })
})