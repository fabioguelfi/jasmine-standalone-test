describe("teste do fail", () => {
    it("deve demonstrar o uso do fail", () => {

        let operacao = (executar, callback) => {
            if (executar) {
                callback();
            }
        }

        operacao(false, () => {
            fail("nao deve executar funcao de callback")
        })

    })
})