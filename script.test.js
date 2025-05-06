/**
 * @jest-environment jsdom
 */

describe("Calculadora Chmod (Testes com DOM)", () => {
  let updateChmod;

  beforeEach(() => {
    document.body.innerHTML = `
      <input type="checkbox" id="owner-read">
      <input type="checkbox" id="owner-write">
      <input type="checkbox" id="owner-execute">
      <input type="checkbox" id="group-read">
      <input type="checkbox" id="group-write">
      <input type="checkbox" id="group-execute">
      <input type="checkbox" id="others-read">
      <input type="checkbox" id="others-write">
      <input type="checkbox" id="others-execute">
      <input type="text" id="chmod-value" value="000">
    `;
    // Simulando a função updateChmod do script.js
    ({ updateChmod } = require("./script.js"));
  });

  it('deve atualizar para "777" quando todas as permissões são marcadas', () => {
    document.getElementById("owner-read").checked = true;
    document.getElementById("owner-write").checked = true;
    document.getElementById("owner-execute").checked = true;
    document.getElementById("group-read").checked = true;
    document.getElementById("group-write").checked = true;
    document.getElementById("group-execute").checked = true;
    document.getElementById("others-read").checked = true;
    document.getElementById("others-write").checked = true;
    document.getElementById("others-execute").checked = true;

    updateChmod();
    expect(document.getElementById("chmod-value").value).toBe("777");
  });

  it('deve atualizar para "000" quando nenhuma permissão é marcada', () => {
    updateChmod();
    expect(document.getElementById("chmod-value").value).toBe("000");
  });

  it('deve atualizar para "764" para leitura, escrita e execução do proprietário, leitura e escrita do grupo, e leitura de outros', () => {
    document.getElementById("owner-read").checked = true;
    document.getElementById("owner-write").checked = true;
    document.getElementById("owner-execute").checked = true;
    document.getElementById("group-read").checked = true;
    document.getElementById("group-write").checked = true;
    document.getElementById("others-read").checked = true;

    updateChmod();
    expect(document.getElementById("chmod-value").value).toBe("764");
  });

  it("deve atualizar corretamente quando apenas algumas permissões são marcadas", () => {
    document.getElementById("owner-read").checked = true;
    document.getElementById("group-execute").checked = true;
    document.getElementById("others-write").checked = true;

    updateChmod();
    expect(document.getElementById("chmod-value").value).toBe("412");
  });
});