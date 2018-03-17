describe("teste do matcher toBeUndefined", () => { //suit
    it("deve testar o toBeUndefined", () => { //spec
        let n1
        let n2 = undefined
        var n3 = false

        expect(n1).toBeUndefined()
        expect(n2).toBeUndefined()
        
        expect(n3).not.toBeUndefined()
        expect(null).not.toBeUndefined()

    }) 
})