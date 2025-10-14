const nots = require("./notas");

test("Testando tons validos", ()=>{
    const ger = new nots.GerenciarNotas();
    expect(ger.notas.length).toBe(0);
    ger.perguntarNota("A",2);
    expect(ger.notas.length).toBe(1);
    ger.perguntarNota("C",3);
    expect(ger.notas.length).toBe(2);
});