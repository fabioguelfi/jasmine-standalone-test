describe("teste do toEqual", () => {
    it("deve validar o uso do toEqual", () => {
        let obj1 = { value: true }
        let obj2 = { value: true }
        expect(obj1).toEqual(obj2) 
        expect(true).toEqual(true);
    })
});