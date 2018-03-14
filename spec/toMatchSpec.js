describe("teste do toMatch", () => { //suit
    it("deve validar o uso do toMatch", () => { //spec
        
        var texto = "teste com Jasmine" 
        expect(texto).toMatch("Jasmine"); //expect
        expect(texto).toMatch(/jasmine/i);
        // expect("12345-456").toMatch(/ˆ\d{5}-\d{3}/)
    })
})