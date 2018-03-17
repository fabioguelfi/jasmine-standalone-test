describe("teste do toBeTruthy passando uma funcao", () => { //suit
    it("deve demontrar o uso do toBeTruthy", () => {
        // true
        let n1 = 10

        // false
        let n2 = undefined
        let n3 = NaN
        let n4 = 0 
        let n5 = ''
        let n6 = null
        let n7 

        // true is acept for toBeTruthy
        expect(n1).toBeTruthy()
        expect("guelfi").toBeTruthy()
        expect(true).toBeTruthy()

        // false because it i need use not
        expect(n2).not.toBeTruthy()
        expect(n3).not.toBeTruthy()
        expect(n4).not.toBeTruthy()
        expect(n5).not.toBeTruthy()


    })
})