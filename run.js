const { exec } = require("child_process");
const path = require("path");

const indexPath = path.resolve(__dirname, "index.html");

let command;
switch (process.platform) {
  case "darwin": // macOS
    command = `open ${indexPath}`;
    break;
  case "win32": // Windows
    command = `start ${indexPath}`;
    break;
  case "linux": // Linux
    command = `xdg-open ${indexPath}`;
    break;
  default:
    console.log(
      "Sistema operacional não suportado para abrir automaticamente.",
    );
    process.exit(1);
}

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao abrir o navegador: ${error}`);
    return;
  }
  console.log("Calculadora Chmod aberta no navegador.");
});
