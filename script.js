function updateChmod() {
  const ownerRead = document.getElementById("owner-read").checked ? 4 : 0;
  const ownerWrite = document.getElementById("owner-write").checked ? 2 : 0;
  const ownerExecute = document.getElementById("owner-execute").checked ? 1 : 0;

  const groupRead = document.getElementById("group-read").checked ? 4 : 0;
  const groupWrite = document.getElementById("group-write").checked ? 2 : 0;
  const groupExecute = document.getElementById("group-execute").checked ? 1 : 0;

  const othersRead = document.getElementById("others-read").checked ? 4 : 0;
  const othersWrite = document.getElementById("others-write").checked ? 2 : 0;
  const othersExecute = document.getElementById("others-execute").checked ? 1 : 0;

  const ownerValue = ownerRead + ownerWrite + ownerExecute;
  const groupValue = groupRead + groupWrite + groupExecute;
  const othersValue = othersRead + othersWrite + othersExecute;

  document.getElementById("chmod-value").value = `${ownerValue}${groupValue}${othersValue}`;
}

function attachListeners() {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", updateChmod);
  });
}

updateChmod();
attachListeners(); 

module.exports = { updateChmod, attachListeners };