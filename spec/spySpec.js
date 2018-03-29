describe("testes do objeto jasmine.clock", () => {

    beforeEach(() => {
        jasmine.clock().install
    })

    afterEach(() => {
        jasmine.clock().uninstall()
    })

    let dobro

    beforeAll(() => {
        dobro = jasmine.createSpy("dobro")
    })

    it("deve demonstrar o uso com o setTimeOut", () => {
        setTimeout(() => {
            dobro(10)
        }, 1000)
        jasmine.clock().tick(1001)
        expect(dobro).toHaveBeenCalled();
    })

    it("deve demonstrar o uso com o setInterval", () => {
        setInterval(() => {
            jasmine.clock().tick();
            expect(dobro).toHaveBeenCalled()
        }, 500)
    })

})