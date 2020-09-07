describe('TESTES DO MÓDULO CALCULOS',()=>{
    
    it('Quando eu executo a função somar passando os valores 2 e 3, o resultado deve ser o valor 5',()=>{

        const moduloCalculos = require('./calculos');
        expect(moduloCalculos.somar(2,3)).toBe(5);
    })
})