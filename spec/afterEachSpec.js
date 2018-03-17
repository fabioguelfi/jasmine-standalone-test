describe("teste afterEachSpec", () => {

    let contador = 0

    beforeEach(() => {
        contador++
    })

    afterEach(() => {
        contador = 0 
    })

    it("deve garantir o valor 1 para o contador", () => {
        expect(contador).toEqual(1)
    })

    it("deve ainda garantir o contador com o valor 1", () => {
        expect(contador).toEqual(1)
    })

    

})