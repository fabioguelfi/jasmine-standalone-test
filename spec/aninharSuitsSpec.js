describe("suit externa", () => {
    
    let contadorExterno = 0 

    beforeEach(() => {
        contadorExterno++
    })

    it("deve conter 1 para contador externo", () => {
         expect(contadorExterno).toEqual(1)
    })

    describe("suit interna", () => {

        let contadorInterno = 0

        beforeEach(() => {
            contadorInterno++
        })

        it("deve validar o valor dos contadores", () => {
            expect(contadorInterno).toEqual(1)
            expect(contadorExterno).toEqual(2)
        })

    })

})