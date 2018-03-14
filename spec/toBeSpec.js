describe("Comparador tobe", () => { // suit
    it("deve validar o uso do toBe", () => { //spec

        let obj1 = { valor: true }
        let obj2 = { valor: true }

        expect(true).toBe(true); //expectations or expect
        expect("Teste").toBe("Teste");
        expect(obj1).not.toBe(obj2);
    })
})